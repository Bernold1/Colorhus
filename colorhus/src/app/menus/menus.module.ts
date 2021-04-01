import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus/menus.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [MenusComponent],
})
export class MenusModule {}
