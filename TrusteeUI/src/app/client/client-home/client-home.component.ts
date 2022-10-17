import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
  auctions: Auction[] = [];

  activeElementId = '1';

  dummyElements = [1,2,3,4]

  constructor(
    private contentOrchestrationService: ContentOrchestrationService
    ) { }

  ngOnInit(): void {
    this.contentOrchestrationService.getAuctions()
    .pipe(
      map(res => {
        return res.slice(0,3);
      })
    )
    .subscribe(
      res => {
        if (res) {
          this.auctions = res;
          console.log(this.auctions);
        }
      }
    );
    
  }
}
