import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'oembed'
})
export class OembedPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(htmlContent: any): any {
  	if (htmlContent.length > 30 && (!htmlContent || htmlContent.indexOf('oembed url') == -1)) return htmlContent;

  	htmlContent = htmlContent.split('<figure class="media"><oembed url="').join(' ');
  	htmlContent = htmlContent.split('"></oembed></figure>').join(' ');

    // Youtube

    let embedStart = '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;min-height:200px;min-width:300px;"><iframe style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="https://www.youtube.com/embed/';
    let embedEnd = '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    let re = /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;
    let m;
    let results = [];
    let resultsCodes = [];

    do {
        m = re.exec(htmlContent);
        if (m) {
            if (results.indexOf(m[0]) == -1) results.push(m[0]);
            if (resultsCodes.indexOf(m[7]) == -1) resultsCodes.push(m[7]);
        }
    } while (m);

    for (let i = 0; i < results.length; i++) {
    	let t = resultsCodes[i].split('&amp;t');
	    htmlContent = htmlContent.split(results[i]).join(embedStart + t[0] + embedEnd);
    }

    // Vimeo

    embedStart = '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;min-height:200px;min-width:300px;"><iframe src="https://player.vimeo.com/video/';
    embedEnd = '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';

    re = /(http:|https:)?(\/\/)?(www\.)?(vimeo.com)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;
    m = null;
    results = [];
    resultsCodes = [];

    do {
        m = re.exec(htmlContent);

        if (m) {
            if (results.indexOf(m[0]) == -1) results.push(m[0]);
            if (resultsCodes.indexOf(m[7]) == -1) resultsCodes.push(m[7]);
        }
    } while (m);

    for (let i = 0; i < results.length; i++) {
      let t = resultsCodes[i].split('&amp;t');
      htmlContent = htmlContent.split(results[i]).join(embedStart + t[0] + embedEnd);
    }

    return htmlContent;
  }
}
