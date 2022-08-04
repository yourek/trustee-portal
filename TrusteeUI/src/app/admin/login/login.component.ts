import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRequest } from 'src/app/api/models';
import { LoginSerivce } from 'src/app/services/login.service';

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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.loginSerivce.currentUserValue.isAuthenticated) {
      this.router.navigate(['../articles'], { relativeTo: this.route });
    }
  }

  logIn() {
    var credentials: AuthRequest = {
      User: this.user,
      Password: this.password
    };

    this.loginSerivce.logIn(credentials).subscribe(
      () => this.router.navigate(['../articles'], { relativeTo: this.route })
    );
  }
}
