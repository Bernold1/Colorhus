import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './bio/bio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    BioRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
  ],
})
export class BioModule {}
