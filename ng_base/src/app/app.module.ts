import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [AppComponent, CardComponent, FormComponent],
  imports: [BrowserModule, FormsModule, NgForOf],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormComponent, CardComponent],
})
export class AppModule {}
