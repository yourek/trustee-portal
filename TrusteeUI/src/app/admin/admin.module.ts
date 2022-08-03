import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminArticlesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
