import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailstring: string = 'mailto:tombernold@gmail.com?Subject=Tilbud';
  constructor() {}

  ngOnInit(): void {}
}
