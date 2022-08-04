import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.contentOrchestrationService.getArticles().subscribe(
      result => {
        if(result) {
          this.articles = result;
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
