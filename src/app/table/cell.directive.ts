import { Directive, Input } from '@angular/core';

@Directive({ selector: 'ng-template[appCell1]' })
export class CellDirective1<TItem extends object>
{
  @Input('appCell1') item!: TItem;

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: CellDirective1<TContextItem>,
    ctx: unknown): ctx is ICellTemplateContext<TContextItem>
  {
    return true;
  }
}

@Directive({ selector: 'ng-template[appCell2]' })
export class CellDirective2<TItem extends object>
{
  @Input('appCell2') item!: TItem;

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: CellDirective2<TContextItem>,
    ctx: unknown): ctx is ICellTemplateContext<TContextItem>
  {
    return true;
  }
}

@Directive({ selector: 'ng-template[appRow]' })
export class RowDirective<TItem extends object>
{
  @Input('appRow') item!: TItem;

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: RowDirective<TContextItem>,
    ctx: unknown): ctx is ICellTemplateContext<TContextItem>
  {
    return true;
  }
}

interface ICellTemplateContext<TItem extends object>
{
  $implicit: TItem;
}

