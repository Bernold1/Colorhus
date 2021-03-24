import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';
  constructor() {}

  ngOnInit(): void {}
}
