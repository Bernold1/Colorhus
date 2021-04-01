import { Component, OnInit } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';
import { trigger, transition, useAnimation } from '@angular/animations';
import { tada } from '../../animation';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  animations: [trigger('tada', [transition('* => *', useAnimation(tada))])],
})
export class MenusComponent {
  //https://github.com/jiayihu/ng-animate
  tada_DA = false;
  tada_EN = false;

  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';

  constructor(private translocoService: TranslocoService) {}

  translateDanish() {
    this.translocoService.setActiveLang('da');
    this.tada_DA = !this.tada_DA;
  }

  translateEnglish() {
    this.translocoService.setActiveLang('en');
    this.tada_EN = !this.tada_EN;
  }
}
