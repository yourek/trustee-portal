import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSerivce } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private loginSerivce: LoginSerivce,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.loginSerivce.logOut();
    this.router.navigate(['./login'], { relativeTo: this.route });
  }

}
