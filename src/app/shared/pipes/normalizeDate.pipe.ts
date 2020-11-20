import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'normalizeDate'})
export class NormalizeDatePipe implements PipeTransform {
  transform(value: any): any {
    if (!value || value.length < 2) return '';

    let dateParts = value.split("-");
    let jsDate = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2), dateParts[2].substr(3, 2), dateParts[2].substr(6, 2), dateParts[2].substr(9, 2)));

    return jsDate;
  }
}