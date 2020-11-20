import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'processPostBody'})
export class ProcessPostBodyPipe implements PipeTransform {
  transform(value: any): string {
  	// value = value.split('![](').join('(');

  	//

    let embedStart = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
    let embedEnd = '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    let re = /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;
    let m;
    let results = [];
    let resultsCodes = [];

    do {
        m = re.exec(value);
        if (m) {
            if (results.indexOf(m[0]) == -1) results.push(m[0]);
            if (resultsCodes.indexOf(m[7]) == -1) resultsCodes.push(m[7]);
        }
    } while (m);

    for (let i = 0; i < results.length; i++) value = value.split(results[i]).join(embedStart + resultsCodes[i] + embedEnd);

    //

    embedStart = '<img src="';
    embedEnd = '" style="max-width:800px">';

    re = /(!\[\]\(https?:\/\/.*\.(?:png|jpg|gif|svg|bmp|jpeg)\))/ig;
    let resultsUrl = [];
    let resultsUrlCLeaned = [];

    do {
        m = re.exec(value);
        if (m) {
            if (resultsUrl.indexOf(m[0]) == -1) resultsUrl.push(m[0]);
        }
    } while (m);

    let tmpUrl = '';

    for (let i = 0; i < resultsUrl.length; i++) {
		tmpUrl = resultsUrl[i].split('![](').join('');
		tmpUrl = tmpUrl.split(')').join(''); //![]

		resultsUrlCLeaned.push(tmpUrl);

		value = value.split(resultsUrl[i]).join(embedStart + tmpUrl + embedEnd);
    }

    //

    embedStart = '<img src="';
    embedEnd = '" style="max-width:800px">';

    re = /(https?:\/\/.*\.(?:png|jpg|gif|svg|bmp|jpeg))/ig;
    results = [];

    do {
        m = re.exec(value);
        if (m) {
            if (results.indexOf(m[0]) == -1 && resultsUrlCLeaned.indexOf(m[0]) == -1) results.push(m[0]);
        }
    } while (m);

    for (let i = 0; i < results.length; i++) value = value.split(results[i]).join(embedStart + results[i] + embedEnd);

    console.log(value);

    return value;
  }
}