import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/api/models';
import { EventEmitter } from '@angular/core';
import { ConfirmationsService } from 'src/app/services/confrimation.service';
import { ActivatedRoute, Router } from '@angular/router';

interface TableArticle {
  Id: string,
  Title: string,
  Date: string,
  Body: string
}

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit, OnChanges {
  @Input() articles!: Article[];
  @Output() articleToDelete = new EventEmitter<Article>();
  
  public loading = true;
  public dataSource = new MatTableDataSource<Article>();
  public displayedColumns = [
    'Id',
    'Title',
    'Date',
    'Body',
    'Edit',
    'Delete'
  ]
  private tableArtciles: TableArticle[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationsService: ConfirmationsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.articles) {
      this.tableArtciles = this.articles.map(d => {
        return {
          Id: d.Id as string,
          Title: d.Title as string,
          Date: d.Date as string,
          Body: d.Body = d.Body?.substring(0,150) + '...' as string
        }
      })
    }
    this.dataSource.data = this.tableArtciles;
  }

  deleteArticle(article: Article) {
    this.confirmationsService.confirm({
      message: `Czy aby na pewno chcesz usunąć ten artykuł ?`,
      action: () => {
        this.loading = true;
        this.emitArticleToDelete(article);
      },
    });
  }

  emitArticleToDelete(article: Article) {
    this.articleToDelete.emit(article);
  }

  editArticle(article: Article) {
    this.router.navigate(['articles/edit', article.Id], { relativeTo: this.route });
  } 

  createArticle() {
    this.router.navigate(['articles/create'], { relativeTo: this.route })
  }
}
