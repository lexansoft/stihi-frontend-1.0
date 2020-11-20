import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter', pure: false})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field : string, value : any): any[] {
    if (!items) return [];

    /*
    if (field == 'user_group_id') {
      return items.filter(it => it.user_group['id'] == value);
    }

    if (field == 'item_id_not_in_array') {
      if(!value || value.length < 1) return items;

      let objectIds: any = [];
      for (let i = 0; i < value.length; i ++) objectIds.push(value[i].id);

      return items.filter(it => objectIds.indexOf(it.id) == -1);
    }
    */

    if (field == 'users') {
      if(!value || value.length < 1) return items;

      value = value.toLowerCase();

      let objectIds: any = [];
      for (let i = 0; i < items.length; i ++) {
        if (items[i].name.toLowerCase().indexOf(value) != -1 || (items[i].nickname && items[i].nickname.toLowerCase().indexOf(value) != -1)) objectIds.push(items[i].id);
      }

      return items.filter(it => objectIds.indexOf(it.id) != -1);
    }

    if (field == 'posts') {
      if(!value || value.length < 1) return items;

      value = value.toLowerCase();

      let objectIds: any = [];
      for (let i = 0; i < items.length; i ++) {
        if (items[i].title.toLowerCase().indexOf(value) != -1 || (items[i].body && items[i].body.toLowerCase().indexOf(value) != -1)) objectIds.push(items[i].id);
      }

      return items.filter(it => objectIds.indexOf(it.id) != -1);
    }

    return items.filter(it => it[field] == value);
  }
}
