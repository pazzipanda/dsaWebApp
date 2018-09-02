import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextWindowComponent } from './text-window/text-window.component';
import { DetailWindowComponent } from './detail-window/detail-window.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TitleComponent } from './title/title.component';
import { AppRoutingModule } from './/app-routing.module';
import { DevelopeComponent } from './develope/develope.component';
import { DevTextWindowComponent } from './dev-text-window/dev-text-window.component';
import { DevDetailWindowComponent } from './dev-detail-window/dev-detail-window.component';
import { DevButtonsBarComponent } from './dev-buttons-bar/dev-buttons-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TextWindowComponent,
    DetailWindowComponent,
    ButtonBarComponent,
    TitleComponent,
    DevelopeComponent,
    DevTextWindowComponent,
    DevDetailWindowComponent,
    DevButtonsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
