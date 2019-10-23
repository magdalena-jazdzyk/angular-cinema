/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageImageDto } from '../models/page-image-dto';
import { ImageDto } from '../models/image-dto';

/**
 * Image Controller
 */
@Injectable({
  providedIn: 'root',
})
class ImageControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/images/all/{page}/{size}';
  static readonly findImageByMovieUsingGETPath = '/images/{movieId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ImageControllerService.FindAllUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsingGETResponse(params: ImageControllerService.FindAllUsingGETParams): __Observable<__StrictHttpResponse<PageImageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/images/all/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageImageDto>;
      })
    );
  }
  /**
   * @param params The `ImageControllerService.FindAllUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsingGET(params: ImageControllerService.FindAllUsingGETParams): __Observable<PageImageDto> {
    return this.findAllUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageImageDto)
    );
  }

  /**
   * @param movieId movieId
   * @return OK
   */
  findImageByMovieUsingGETResponse(movieId: number): __Observable<__StrictHttpResponse<Array<ImageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/images/${movieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImageDto>>;
      })
    );
  }
  /**
   * @param movieId movieId
   * @return OK
   */
  findImageByMovieUsingGET(movieId: number): __Observable<Array<ImageDto>> {
    return this.findImageByMovieUsingGETResponse(movieId).pipe(
      __map(_r => _r.body as Array<ImageDto>)
    );
  }
}

module ImageControllerService {

  /**
   * Parameters for findAllUsingGET
   */
  export interface FindAllUsingGETParams {

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

export { ImageControllerService }
