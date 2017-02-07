import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  //styleUrls:"_app.component.scss"
  styleUrls: ['./styles.scss'],
})
export class AppComponent  { name = 'Angular'; }
