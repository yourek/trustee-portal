import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

  activeElementId = '1';

  dummyElements = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      var newId = (parseInt(this.activeElementId)+1).toString();
      if (newId === '5') {
        newId = '1';
      }
      this.activeElementId = newId;
      console.log(this.activeElementId)
    }, 2000)
  }

  onClick(event: any) {
    if (event.target.id) {
      this.activeElementId = event.target.id.split('-')[1]
      console.log(this.activeElementId)
    }
  }
}
