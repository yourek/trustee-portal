import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { AdminArticlesEditComponent } from './admin-articles-edit/admin-articles-edit.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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
        path: '',
        component: AdminHomeComponent,
        canActivate: [ AuthGuard ]
      },
      { 
        path: 'articles',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
                component: AdminArticlesEditComponent,
                canActivate: [ AuthGuard ]
              }
            ]
          }
        ]
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
