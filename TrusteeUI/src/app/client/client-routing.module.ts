import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientArticlesComponent } from './client-articles/client-articles.component';
import { ClientAuctionsComponent } from './client-auctions/client-auctions.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientHomeComponent
      },
      {
        path: 'aktualnosci',
        component: ClientArticlesComponent
      },
      {
        path: 'licytacje',
        component: ClientAuctionsComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
