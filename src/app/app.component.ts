import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 class="heading-one">Hello whats up are you insane {{name}}</h1>`,
  styleUrls: ['./styles.scss']
  //styleUrls: ['./_app.component.scss']
})
export class AppComponent  { name = 'Angular'; }
