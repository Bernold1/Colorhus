import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';
  constructor() {}

  ngOnInit(): void {}
}
