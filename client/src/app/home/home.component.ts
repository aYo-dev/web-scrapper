import { Component } from '@angular/core';

@Component({
  selector: 'home-wrapper',
  template: '<h1>{{title}}</h1>'
})
export class HomeComponent {
  title = 'Home page';
}
