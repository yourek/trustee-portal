import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Article } from 'src/app/api/models';
import { Auction } from 'src/app/api/models/auction';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  public articles: Article[] = [];
  public auctions: Auction[] = [];

  constructor(private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    var forkedActions = forkJoin(
      [
        this.contentOrchestrationService.getArticles(),
        this.contentOrchestrationService.getAuctions()
      ]
    ) 
    forkedActions.subscribe(
      responses => {
        if(responses) {
          this.articles = responses[0];
          this.auctions = responses[1];
        }
      }
    )
  }

  deleteArticle(event: any) {
    if(event.Id) {
      this.contentOrchestrationService.deleteArticle(event.Id)
        .subscribe(() => this.fetchData());
    }
  }
}
