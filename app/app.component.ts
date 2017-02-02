import { Component } from '@angular/core';

import { MenuComponent }  from './components/webparts/menu/menu.component';
import { TestimonialsComponent }  from './components/webparts/testimonials/testimonials.component';

@Component({
  selector: 'my-app',
  template: `
  <my-menu></my-menu>
  <my-testimonials></my-testimonials>
  `
})
export class AppComponent  {}
