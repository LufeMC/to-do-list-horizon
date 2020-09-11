import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module"
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  
import { TdListComponent } from './td-list/td-list.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { ItemComponent } from './td-list/item/item.component'
import { ItemAddComponent } from './button-submit/item-add/item-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TdListComponent,
    ButtonSubmitComponent,
    ItemComponent,
    ItemAddComponent
  ],
  entryComponents: [ItemComponent, ItemAddComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
