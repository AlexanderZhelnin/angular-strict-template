import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CellDirective1, CellDirective2, RowDirective } from './table/cell.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellDirective1,
    CellDirective2,
    RowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
