import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ItemsModule} from "./items/items.module";
import {ItemsDataService} from "./items/items-data.service";
import { SelectionModule } from './selection/selection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule.forRoot(),
    SelectionModule
  ],
  providers: [
    ItemsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
