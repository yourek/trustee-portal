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
}