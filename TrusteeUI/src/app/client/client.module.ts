import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientArticlesComponent } from './client-articles/client-articles.component';
import { ClientAuctionsComponent } from './client-auctions/client-auctions.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolsModule } from '../tools/tools.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientHomeComponent,
    ClientArticlesComponent,
    ClientAuctionsComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ToolsModule
  ]
})
export class ClientModule { }
