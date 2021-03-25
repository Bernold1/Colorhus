import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';

  constructor(private translocoService: TranslocoService) {}

  translateDanish() {
    this.translocoService.setActiveLang('da');
  }

  translateEnglish() {
    this.translocoService.setActiveLang('en');
  }
}
