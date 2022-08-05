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

import { UploadResponse } from '../models/upload-response';

@Injectable({
  providedIn: 'root',
})
export class UploadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUploadPost
   */
  static readonly ApiUploadPostPath = '/api/Upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadPost$Plain$Response(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<StrictHttpResponse<UploadResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UploadService.ApiUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadPost$Plain(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<UploadResponse> {

    return this.apiUploadPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UploadResponse>) => r.body as UploadResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadPost$Json$Response(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<StrictHttpResponse<UploadResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UploadService.ApiUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadPost$Json(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<UploadResponse> {

    return this.apiUploadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UploadResponse>) => r.body as UploadResponse)
    );
  }

}
