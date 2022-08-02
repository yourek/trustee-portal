/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Article } from '../models/article';
import { NewArticle } from '../models/new-article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiArticlesGet
   */
  static readonly ApiArticlesGetPath = '/api/Articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Article>>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Article>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesGet$Plain(params?: {
  }): Observable<Array<Article>> {

    return this.apiArticlesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Article>>) => r.body as Array<Article>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Article>>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Article>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesGet$Json(params?: {
  }): Observable<Array<Article>> {

    return this.apiArticlesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Article>>) => r.body as Array<Article>)
    );
  }

  /**
   * Path part for operation apiArticlesPost
   */
  static readonly ApiArticlesPostPath = '/api/Articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlesPost$Response(params?: {
    body?: NewArticle
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlesPost(params?: {
    body?: NewArticle
  }): Observable<void> {

    return this.apiArticlesPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiArticlesIdGet
   */
  static readonly ApiArticlesIdGetPath = '/api/Articles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Article>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Article>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdGet$Plain(params: {
    id: string;
  }): Observable<Article> {

    return this.apiArticlesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Article>) => r.body as Article)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Article>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Article>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdGet$Json(params: {
    id: string;
  }): Observable<Article> {

    return this.apiArticlesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Article>) => r.body as Article)
    );
  }

  /**
   * Path part for operation apiArticlesIdPut
   */
  static readonly ApiArticlesIdPutPath = '/api/Articles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlesIdPut$Response(params: {
    id: string;
    body?: Article
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlesIdPut(params: {
    id: string;
    body?: Article
  }): Observable<void> {

    return this.apiArticlesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiArticlesIdDelete
   */
  static readonly ApiArticlesIdDeletePath = '/api/Articles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ArticlesService.ApiArticlesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticlesIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiArticlesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
