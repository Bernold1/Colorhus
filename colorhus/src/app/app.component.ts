import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';

  constructor() {}
}
