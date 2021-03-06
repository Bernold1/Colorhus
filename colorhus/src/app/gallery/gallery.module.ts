import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    MatButtonModule,
    SharedModule,
    TranslocoModule,
  ],
})
export class GalleryModule {}
