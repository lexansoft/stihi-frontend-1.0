import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    let status = 'Не определен';

    if (value == 0) status = 'Удален';
    if (value == 1) status = 'Не активен';
    if (value == 2) status = 'Активен';

    return status;
  }
}