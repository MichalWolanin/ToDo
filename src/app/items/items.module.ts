import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import {ItemsDataService} from "./items-data.service";
import {SelectionModule} from "../selection/selection.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    SelectionModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemsListComponent,
  ],
  providers:[
  ]
})
export class ItemsModule {

  static forChild():ModuleWithProviders<any>{
    return {
      ngModule:ItemsModule
    }
  }

  static forRoot(options = {}):ModuleWithProviders<any>{

    return {
      ngModule: ItemsModule,
      providers: [
        {
          provide: 'options',
          useValue: options
        },
        ItemsDataService
      ]
    }
  }
}
