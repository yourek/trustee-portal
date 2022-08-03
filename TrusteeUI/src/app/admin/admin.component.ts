import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSerivce } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUserName: string | undefined = '';

  constructor(
    private loginSerivce: LoginSerivce,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginSerivce.currentUser.subscribe(res => {
      if(res.user?.FullName){
        this.currentUserName = res.user?.FullName;
      } else {
        this.currentUserName = '';
      }
    })
  }

  logOut(): void {
    this.loginSerivce.logOut();
    this.router.navigate(['./login'], { relativeTo: this.route });
  }

}
