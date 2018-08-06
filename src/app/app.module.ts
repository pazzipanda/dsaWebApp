import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextWindowComponent } from './text-window/text-window.component';
import { DetailWindowComponent } from './detail-window/detail-window.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TitleComponent } from './title/title.component';
import { AppRoutingModule } from './/app-routing.module';
import { DevelopeComponent } from './develope/develope.component';

@NgModule({
  declarations: [
    AppComponent,
    TextWindowComponent,
    DetailWindowComponent,
    ButtonBarComponent,
    TitleComponent,
    DevelopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
