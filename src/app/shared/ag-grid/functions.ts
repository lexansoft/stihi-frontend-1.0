import { Injectable } from '@angular/core';

@Injectable()
export class AgGridFunctions {
  constructor(
  ) {}

  // date

  dateCellRenderer(params) {
    const value = params.value;

    if (!value || value.length < 7) return '';

    let date = new Date(value*1000);

    return pad(date.getDate())+'/'+pad(date.getMonth() + 1)+'/'+date.getFullYear();
  }

  dateTimeCellRenderer(params) {
    const value = params.value;

    if (!value || value.length < 7) return '';

    let date = new Date(value*1000);

    return pad(date.getDate())+'/'+pad(date.getMonth() + 1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
  }

  dateFilterParams(filterLocalDateAtMidnight: any, cellValue: any) {
    let selectedDate = filterLocalDateAtMidnight.getTime() / 1000;

    if (new Date(selectedDate * 1000).toDateString() == new Date(cellValue * 1000).toDateString()) {
      return 0
    }

    if (cellValue < selectedDate) {
      return -1;
    }

    if (cellValue > selectedDate) {
      return 1;
    }
  }

  tagTypeCellRenderer(params) {
    const value = params.value;

    if (!value || value.length < 1) return '';

    if (value == 0) return 'Тег';
    if (value == 1) return 'Категория';
  }

  yesNoCellRenderer(params) {
    const value = params.value;

    if (!value || value.length < 1) return '';

    if (!value || value == 0) return 'Нет';
    if (value || value == 1) return 'Да';
  }

  editCellRenderer(params) {
    const value = params.value;

    if (!value || value.length < 1) return '';

    return '<button type="button" class="btn btn-primary btn-flat btn-xs"><span class="fa fa-edit" element_type="edit_button"></span></button>';
  }

  getLocaleText(locale: string) {
    return {

      // for filter panel
      page: 'Cтраница',
      more: 'Больше',
      to: 'До',
      of: 'От',
      next: 'Следующая',
      last: 'Последняя',
      first: 'Первая',
      previous: 'Предыдущая',
      loadingOoo: 'Загрузка...',

      // for set filter
      selectAll: 'Выбрать все',
      searchOoo: 'Найти...',
      blanks: 'Пустые',

      // for number filter and text filter
      filterOoo: 'Фильтр...',
      applyFilter: 'Применить фильтр...',
      notEqual: 'Не равно',
      notContains: 'Не содержит',

      // for number filter
      equals: 'Равно',
      lessThan: 'Меньше чем',
      greaterThan: 'Больше чем',

      // for text filter
      contains: 'Содержит',
      startsWith: 'Начинается с',
      endsWith: 'Заканчивается',

      // the header of the default group column
      group: 'Группировать',

      // tool panel
      columns: 'Столбцы',
      rowGroupColumns: 'Группировать столбцы',
      rowGroupColumnsEmptyMessage: 'Перетащите столбцы сюда',
      valueColumns: 'Столбцы со значением',
      pivotMode: 'Режим перестановки',
      groups: 'Группы',
      values: 'Значения',
      pivots: 'Перестановки',
      valueColumnsEmptyMessage: 'Перетащите столбцы что бы аггрегировать',
      pivotColumnsEmptyMessage: 'Перетащите сюда для перестановки',

      // other
      noRowsToShow: 'Нет данных',

      // enterprise menu
      pinColumn: 'Закрепить столбец',
      valueAggregation: 'Аггрегировать',
      autosizeThiscolumn: 'Авторазмер этой колонки',
      autosizeAllColumns: 'Авторазмер всех колонок',
      groupBy: 'Группировать по',
      ungroupBy: 'Отменить группировку по',
      resetColumns: 'Сбросить настройки колонок',
      expandAll: 'Развернуть',
      collapseAll: 'Свернуть',
      toolPanel: 'Панель управления',
      export: 'Экспортировать',
      csvExport: 'Экспортировать в CVS',
      excelExport: 'Экспортировать в Excel',

      // enterprise menu pinning
      pinLeft: 'Закрепить слева <<',
      pinRight: 'Закрепить справа >>',
      noPin: 'Без закрепления <>',

      // enterprise menu aggregation and status panel
      sum: 'Сумма',
      min: 'Минимум',
      max: 'Максимум',
      none: 'Нет',
      count: 'Количество',
      average: 'Среднее',

      // standard menu
      copy: 'Копировать',
      copyWithHeaders: 'Копировать с заголовками',
      ctrlC: 'ctrl + C',
      paste: 'Вставить',
      ctrlV: 'ctrl + V'
    };
  }
}

function pad(num: any) {
  let asString = num + "";
  while (asString.length < 2) asString = "0" + asString;
  return asString;
}
