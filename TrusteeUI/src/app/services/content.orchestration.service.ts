import { Injectable } from "@angular/core";
import { Article, NewArticle } from "../api/models";
import { Auction } from "../api/models/auction";
import { NewAuction } from "../api/models/new-auction";
import { ArticlesService } from "../api/services";
import { AuctionsService } from "../api/services/auctions.service";

@Injectable({
    providedIn: 'root'
})
export class ContentOrchestrationService {
    constructor(
        private articlesService: ArticlesService,
        private auctionsService: AuctionsService){}

    getArticles() {
        return this.articlesService.apiArticlesGet$Json();
    }

    getArticle(id: string) {
        return this.articlesService.apiArticlesIdGet$Json({id});
    }

    updateArticle(id: string, article: Article) {
        return this.articlesService.apiArticlesIdPut({id, body: article});
    }

    createArticle(newArticle: NewArticle){
        return this.articlesService.apiArticlesPost({body: newArticle})
    }

    deleteArticle(id: string) {
        return this.articlesService.apiArticlesIdDelete({id});
    }

    getAuctions() {
        return this.auctionsService.apiAuctionsGet$Json();
    }

    getAuction(id: string) {
        return this.auctionsService.apiAuctionsIdGet$Json({id});
    }

    updateAuction(id: string, auction: Auction) {
        return this.auctionsService.apiAuctionsIdPut({id, body: auction});
    }

    createAuction(newAuction: NewAuction){
        return this.auctionsService.apiAuctionsPost({body: newAuction})
    }

    deleteAuction(id: string) {
        return this.auctionsService.apiAuctionsIdDelete({id});
    }
}