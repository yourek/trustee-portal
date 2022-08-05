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

import { Auction } from '../models/auction';
import { NewAuction } from '../models/new-auction';

@Injectable({
  providedIn: 'root',
})
export class AuctionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuctionsGet
   */
  static readonly ApiAuctionsGetPath = '/api/Auctions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Auction>>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Auction>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsGet$Plain(params?: {
  }): Observable<Array<Auction>> {

    return this.apiAuctionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Auction>>) => r.body as Array<Auction>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Auction>>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Auction>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsGet$Json(params?: {
  }): Observable<Array<Auction>> {

    return this.apiAuctionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Auction>>) => r.body as Array<Auction>)
    );
  }

  /**
   * Path part for operation apiAuctionsPost
   */
  static readonly ApiAuctionsPostPath = '/api/Auctions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionsPost$Response(params?: {
    body?: NewAuction
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAuctionsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionsPost(params?: {
    body?: NewAuction
  }): Observable<void> {

    return this.apiAuctionsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionsIdGet
   */
  static readonly ApiAuctionsIdGetPath = '/api/Auctions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Auction>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Auction>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdGet$Plain(params: {
    id: string;
  }): Observable<Auction> {

    return this.apiAuctionsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Auction>) => r.body as Auction)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Auction>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Auction>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdGet$Json(params: {
    id: string;
  }): Observable<Auction> {

    return this.apiAuctionsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Auction>) => r.body as Auction)
    );
  }

  /**
   * Path part for operation apiAuctionsIdPut
   */
  static readonly ApiAuctionsIdPutPath = '/api/Auctions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionsIdPut$Response(params: {
    id: string;
    body?: Auction
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAuctionsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionsIdPut(params: {
    id: string;
    body?: Auction
  }): Observable<void> {

    return this.apiAuctionsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionsIdDelete
   */
  static readonly ApiAuctionsIdDeletePath = '/api/Auctions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionsService.ApiAuctionsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAuctionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionsIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiAuctionsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
