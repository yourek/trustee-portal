import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-auctions',
  templateUrl: './client-auctions.component.html',
  styleUrls: ['./client-auctions.component.scss']
})
export class ClientAuctionsComponent implements OnInit {

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
      //console.log(this.activeElementId)
    }, 2000)
  }

  onClick(event: any) {
    if (event.target.id) {
      this.activeElementId = event.target.id.split('-')[1]
      //console.log(this.activeElementId)
    }
  }

}
