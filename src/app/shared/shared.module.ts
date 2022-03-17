import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectionModule} from "../selection/selection.module";
import {SelectableDirective} from "../selection/selectable.directive";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectionModule
  ],
  exports: [
    SelectableDirective
  ]
})
export class SharedModule { }
