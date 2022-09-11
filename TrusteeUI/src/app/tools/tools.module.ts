import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickSlidesComponent } from './slick-slides/slick-slides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    SlickSlidesComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    SlickSlidesComponent
  ]
})
export class ToolsModule { }
