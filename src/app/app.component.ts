import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { IPermissions, IRowSpan, IUser } from './interfces';
import { CellDirective1, CellDirective2, RowDirective } from './table/cell.directive';
import { ICell, IColumn, IRow } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent<cell1 extends object> implements OnInit
{
  cell1: IUser = { name: '', login: '' };
  cell2: IPermissions = { read: false, write: false };
  rowSpan: IRowSpan = { cells: [] };

  // @ViewChild('cell1', { static: true }) template1!: TemplateRef<any>;
  // @ViewChild('cell2', { static: true }) template2!: TemplateRef<any>;
  // @ViewChild('row_span', { static: true }) templateRow!: TemplateRef<any>;

  @ViewChild(CellDirective1, { static: true, read: TemplateRef })
  template1!: TemplateRef<IUser>;
  @ViewChild(CellDirective2, { static: true, read: TemplateRef })
  template2!: TemplateRef<IPermissions>;
  @ViewChild(RowDirective, { static: true, read: TemplateRef })
  templateRow!: TemplateRef<IRowSpan>;

  rows: IRow[] = [];
  columns: IColumn[] = [];
  ngOnInit(): void
  {
    this.rows = [
      {
        template: this.templateRow,
        cells: [{ value: 'Группа1' }]
      },
      ...[...Array(10).keys()].map(index =>
      {
        return {
          cells: [
            {
              value: {
                login: `login${index}`,
                name: `name${index}`
              } as IUser,
              template: this.template1
            },
            {
              value: {
                read: Math.random() > 0.5,
                write: Math.random() > 0.5
              } as IPermissions,
              template: this.template2
            }
          ]
        } as IRow;
      })
      , {
        template: this.templateRow,
        cells: [{ value: 'Группа2' }]
      },
      ...[...Array(10).keys()].map(index =>
      {
        return {
          cells: [
            {
              value: {
                login: `login${index + 10}`,
                name: `name${index + 10}`
              } as IUser,
              template: this.template1
            },
            {
              value: {
                read: Math.random() > 0.5,
                write: Math.random() > 0.5
              } as IPermissions,
              template: this.template2
            }
          ]
        } as IRow;
      })


    ];

    this.columns = [
      { name: 'Колонка1' },
      { name: 'Колонка2' }
    ];

  }


}
