import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectionService} from "./selection.service";
import { SelectableDirective } from './selectable.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective
  ],
  exports: [
    SelectableDirective
  ],
  providers: [
    // SelectionService
  ]
})
export class SelectionModule { }
