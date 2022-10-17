import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TimeoutConfig } from 'rxjs';

@Component({
  selector: 'lib-slick-slides',
  templateUrl: './slick-slides.component.html',
  styleUrls: ['./slick-slides.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlickSlidesComponent implements OnInit {
  public activeElementId = '1';

  dummyElements = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.setElementId();
    }, 2000);

  }

  setElementId() {
    var newId = (parseInt(this.activeElementId)+1).toString();
      if (newId === '5') {
        newId = '1';
      }
    this.activeElementId = newId;
    console.log(this.activeElementId);
  }

  onClick(event: any) {
    if (event.target.id) {
      //this.activeElementId = event.target.id.split('-')[1]
    }
  }
}
