import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent, 
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'articles',
        component: AdminArticlesComponent,
        canActivate: [ AuthGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
