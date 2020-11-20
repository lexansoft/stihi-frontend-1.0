import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'howLongAgo'})
export class HowLongAgoPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 99999999) return '';

    let d = new Date();
    let timestampNow = d.getTime() / 1000;

    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;

    let elapsed = (timestampNow - value) * 1000;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed/1000) + ' сек. назад';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed/msPerMinute) + ' мин. назад';
    }

    else if (elapsed < msPerDay ) {
      return Math.round(elapsed/msPerHour ) + ' час. назад';
    }

    else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' дн. назад';
    }

    else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' мес. назад';
    }

    else {
      return Math.round(elapsed/msPerYear ) + ' лет назад';
    }
  }
}