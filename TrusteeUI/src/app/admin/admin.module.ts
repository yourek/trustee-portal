import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAuctionsComponent } from './admin-auctions/admin-auctions.component';
import { AdminArticlesEditComponent } from './admin-articles-edit/admin-articles-edit.component';
import { AdminArticlesCreateComponent } from './admin-articles-create/admin-articles-create.component';
import { AdminAuctionsCreateComponent } from './admin-auctions-create/admin-auctions-create.component';
import { AdminAuctionsEditComponent } from './admin-auctions-edit/admin-auctions-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminArticlesComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminAuctionsComponent,
    AdminArticlesEditComponent,
    AdminArticlesCreateComponent,
    AdminAuctionsCreateComponent,
    AdminAuctionsEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
