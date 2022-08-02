import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  public articles: Article[] = [];
  
  constructor(private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.contentOrchestrationService.getArticles().subscribe(
      result => {
        if(result) {
          this.articles = result;
          console.log(this.articles);
        }
      }
    )
  }

}
