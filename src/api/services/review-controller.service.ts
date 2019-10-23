/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReviewDto } from '../models/review-dto';
import { PageReviewDto } from '../models/page-review-dto';

/**
 * Review Controller
 */
@Injectable({
  providedIn: 'root',
})
class ReviewControllerService extends __BaseService {
  static readonly addReviewUsingPOSTPath = '/reviews';
  static readonly findAllReviewUsingGETPath = '/reviews/all/{page}/{size}';
  static readonly findReviewByMovieUsingGETPath = '/reviews/{movieId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param reviewDto reviewDto
   * @return OK
   */
  addReviewUsingPOSTResponse(reviewDto: ReviewDto): __Observable<__StrictHttpResponse<ReviewDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reviewDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/reviews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReviewDto>;
      })
    );
  }
  /**
   * @param reviewDto reviewDto
   * @return OK
   */
  addReviewUsingPOST(reviewDto: ReviewDto): __Observable<ReviewDto> {
    return this.addReviewUsingPOSTResponse(reviewDto).pipe(
      __map(_r => _r.body as ReviewDto)
    );
  }

  /**
   * @param params The `ReviewControllerService.FindAllReviewUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllReviewUsingGETResponse(params: ReviewControllerService.FindAllReviewUsingGETParams): __Observable<__StrictHttpResponse<PageReviewDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reviews/all/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageReviewDto>;
      })
    );
  }
  /**
   * @param params The `ReviewControllerService.FindAllReviewUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllReviewUsingGET(params: ReviewControllerService.FindAllReviewUsingGETParams): __Observable<PageReviewDto> {
    return this.findAllReviewUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageReviewDto)
    );
  }

  /**
   * @param movieId movieId
   * @return OK
   */
  findReviewByMovieUsingGETResponse(movieId: number): __Observable<__StrictHttpResponse<Array<ReviewDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reviews/${movieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReviewDto>>;
      })
    );
  }
  /**
   * @param movieId movieId
   * @return OK
   */
  findReviewByMovieUsingGET(movieId: number): __Observable<Array<ReviewDto>> {
    return this.findReviewByMovieUsingGETResponse(movieId).pipe(
      __map(_r => _r.body as Array<ReviewDto>)
    );
  }
}

module ReviewControllerService {

  /**
   * Parameters for findAllReviewUsingGET
   */
  export interface FindAllReviewUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }
}

export { ReviewControllerService }
