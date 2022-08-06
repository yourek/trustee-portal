import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  mobileSize = false; 

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1200px)'])
      //.pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((breakpointState: BreakpointState) => {
        this.mobileSize = breakpointState.matches;
        console.log(this.mobileSize);
        //this.isMenuOpened = !this.mobileSize;
      });
  }

}
