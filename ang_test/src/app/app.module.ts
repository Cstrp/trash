import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatSliderModule } from '@angular/material/slider'

import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
