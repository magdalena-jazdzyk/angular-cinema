/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageVideoDto } from '../models/page-video-dto';
import { VideoDto } from '../models/video-dto';

/**
 * Video Controller
 */
@Injectable({
  providedIn: 'root',
})
class VideoControllerService extends __BaseService {
  static readonly findAllVideoUsingGETPath = '/videos/all/{page}/{size}';
  static readonly findVideoByMovieUsingGETPath = '/videos/{movieId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `VideoControllerService.FindAllVideoUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllVideoUsingGETResponse(params: VideoControllerService.FindAllVideoUsingGETParams): __Observable<__StrictHttpResponse<PageVideoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/videos/all/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageVideoDto>;
      })
    );
  }
  /**
   * @param params The `VideoControllerService.FindAllVideoUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllVideoUsingGET(params: VideoControllerService.FindAllVideoUsingGETParams): __Observable<PageVideoDto> {
    return this.findAllVideoUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageVideoDto)
    );
  }

  /**
   * @param movieId movieId
   * @return OK
   */
  findVideoByMovieUsingGETResponse(movieId: number): __Observable<__StrictHttpResponse<Array<VideoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/videos/${movieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VideoDto>>;
      })
    );
  }
  /**
   * @param movieId movieId
   * @return OK
   */
  findVideoByMovieUsingGET(movieId: number): __Observable<Array<VideoDto>> {
    return this.findVideoByMovieUsingGETResponse(movieId).pipe(
      __map(_r => _r.body as Array<VideoDto>)
    );
  }
}

module VideoControllerService {

  /**
   * Parameters for findAllVideoUsingGET
   */
  export interface FindAllVideoUsingGETParams {

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

export { VideoControllerService }
