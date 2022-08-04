import { Injectable } from "@angular/core";
import { Article } from "../api/models";
import { ArticlesService } from "../api/services";

@Injectable({
    providedIn: 'root'
})
export class ContentOrchestrationService {
    constructor(private articlesService: ArticlesService){}

    getArticles() {
        return this.articlesService.apiArticlesGet$Json();
    }

    getArticle(id: string) {
        return this.articlesService.apiArticlesIdGet$Json({id});
    }

    updateArticle(id: string, article: Article) {
        return this.articlesService.apiArticlesIdPut({id, body: article});
    }

    deleteArticle(id: string) {
        return this.articlesService.apiArticlesIdDelete({id});
    }
}