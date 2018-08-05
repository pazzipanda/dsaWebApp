import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextWindowComponent } from './text-window/text-window.component';
import { DetailWindowComponent } from './detail-window/detail-window.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TextWindowComponent,
    DetailWindowComponent,
    ButtonBarComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
