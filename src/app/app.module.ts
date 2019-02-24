import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
 
import { AppComponent }  from './app.component';


import {HeroesComponent} from './hero-form/hero-form.component'
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }