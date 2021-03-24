import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss'],
})
export class ContactFooterComponent implements OnInit {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';
  constructor() {}

  ngOnInit(): void {}
}
