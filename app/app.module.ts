import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MenuComponent }  from './components/webparts/menu/menu.component';
import { TestimonialsComponent }  from './components/webparts/testimonials/testimonials.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MenuComponent, TestimonialsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
