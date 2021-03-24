import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ContactFooterComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ContactFooterComponent],
})
export class SharedModule {}
