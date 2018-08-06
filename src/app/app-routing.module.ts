import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { DevelopeComponent } from './develope/develope.component';

const routes: Routes = [
  {path: '', redirectTo: '/game', pathMatch: 'full' },
  {path: 'game', component: TitleComponent},
  {path: 'develope', component: DevelopeComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
 }
