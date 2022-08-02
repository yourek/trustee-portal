import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from '../api/models';
import { LoginSerivce } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responseData: any;
  user: string = '';
  password: string = '';

  constructor(
    private loginSerivce: LoginSerivce,
    private route: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    var credentials: AuthRequest = {
      User: this.user,
      Password: this.password
    };

    this.loginSerivce.logIn(credentials).subscribe(
      result => {
        this.route.navigate(['articles']);
      }
    );
  }

  logOut() {
    this.loginSerivce.logOut();
    this.route.navigate(['login']);
  }

}
