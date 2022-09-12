import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface IColumn
{
  name: string;
}

export interface IRow
{
  cells: ICell[];
  template?: TemplateRef<unknown>;
}

export interface ICell
{
  value: unknown;
  template?: TemplateRef<unknown>;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit
{

  @Input()
  columns: IColumn[] = [];

  @Input()
  rows: IRow[] = [];

  constructor() { }

  ngOnInit(): void
  {
  }

}
