/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RepertoireDto } from '../models/repertoire-dto';

/**
 * Repertoire Controller
 */
@Injectable({
  providedIn: 'root',
})
class RepertoireControllerService extends __BaseService {
  static readonly addRepertoireUsingPOSTPath = '/repertoire';
  static readonly updateUsingPUT1Path = '/repertoire/{id}';
  static readonly findByMovieIdUsingGETPath = '/repertoire/{movieId}';
  static readonly findByMovieIdAndDateUsingGETPath = '/repertoire/{movieId}/{date}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param repertoireDto repertoireDto
   * @return OK
   */
  addRepertoireUsingPOSTResponse(repertoireDto: RepertoireDto): __Observable<__StrictHttpResponse<RepertoireDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = repertoireDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/repertoire`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RepertoireDto>;
      })
    );
  }
  /**
   * @param repertoireDto repertoireDto
   * @return OK
   */
  addRepertoireUsingPOST(repertoireDto: RepertoireDto): __Observable<RepertoireDto> {
    return this.addRepertoireUsingPOSTResponse(repertoireDto).pipe(
      __map(_r => _r.body as RepertoireDto)
    );
  }

  /**
   * @param params The `RepertoireControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `repertoireDto`: repertoireDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: RepertoireControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<RepertoireDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.repertoireDto;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/repertoire/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RepertoireDto>;
      })
    );
  }
  /**
   * @param params The `RepertoireControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `repertoireDto`: repertoireDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: RepertoireControllerService.UpdateUsingPUT1Params): __Observable<RepertoireDto> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as RepertoireDto)
    );
  }

  /**
   * @param movieId movieId
   * @return OK
   */
  findByMovieIdUsingGETResponse(movieId: number): __Observable<__StrictHttpResponse<Array<RepertoireDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repertoire/${movieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RepertoireDto>>;
      })
    );
  }
  /**
   * @param movieId movieId
   * @return OK
   */
  findByMovieIdUsingGET(movieId: number): __Observable<Array<RepertoireDto>> {
    return this.findByMovieIdUsingGETResponse(movieId).pipe(
      __map(_r => _r.body as Array<RepertoireDto>)
    );
  }

  /**
   * @param params The `RepertoireControllerService.FindByMovieIdAndDateUsingGETParams` containing the following parameters:
   *
   * - `movieId`: movieId
   *
   * - `date`: date
   *
   * @return OK
   */
  findByMovieIdAndDateUsingGETResponse(params: RepertoireControllerService.FindByMovieIdAndDateUsingGETParams): __Observable<__StrictHttpResponse<Array<RepertoireDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repertoire/${params.movieId}/${params.date}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RepertoireDto>>;
      })
    );
  }
  /**
   * @param params The `RepertoireControllerService.FindByMovieIdAndDateUsingGETParams` containing the following parameters:
   *
   * - `movieId`: movieId
   *
   * - `date`: date
   *
   * @return OK
   */
  findByMovieIdAndDateUsingGET(params: RepertoireControllerService.FindByMovieIdAndDateUsingGETParams): __Observable<Array<RepertoireDto>> {
    return this.findByMovieIdAndDateUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RepertoireDto>)
    );
  }
}

module RepertoireControllerService {

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * repertoireDto
     */
    repertoireDto: RepertoireDto;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for findByMovieIdAndDateUsingGET
   */
  export interface FindByMovieIdAndDateUsingGETParams {

    /**
     * movieId
     */
    movieId: number;

    /**
     * date
     */
    date: string;
  }
}

export { RepertoireControllerService }
