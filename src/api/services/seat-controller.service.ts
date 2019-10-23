/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SeatDto } from '../models/seat-dto';

/**
 * Seat Controller
 */
@Injectable({
  providedIn: 'root',
})
class SeatControllerService extends __BaseService {
  static readonly addSeatUsingPOSTPath = '/seats';
  static readonly findAllMovieUsingGET1Path = '/seats/{movieId}/{date}/{time}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param seatDto seatDto
   * @return OK
   */
  addSeatUsingPOSTResponse(seatDto: SeatDto): __Observable<__StrictHttpResponse<SeatDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = seatDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/seats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SeatDto>;
      })
    );
  }
  /**
   * @param seatDto seatDto
   * @return OK
   */
  addSeatUsingPOST(seatDto: SeatDto): __Observable<SeatDto> {
    return this.addSeatUsingPOSTResponse(seatDto).pipe(
      __map(_r => _r.body as SeatDto)
    );
  }

  /**
   * @param params The `SeatControllerService.FindAllMovieUsingGET1Params` containing the following parameters:
   *
   * - `time`: time
   *
   * - `movieId`: movieId
   *
   * - `date`: date
   *
   * @return OK
   */
  findAllMovieUsingGET1Response(params: SeatControllerService.FindAllMovieUsingGET1Params): __Observable<__StrictHttpResponse<Array<SeatDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/seats/${params.movieId}/${params.date}/${params.time}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SeatDto>>;
      })
    );
  }
  /**
   * @param params The `SeatControllerService.FindAllMovieUsingGET1Params` containing the following parameters:
   *
   * - `time`: time
   *
   * - `movieId`: movieId
   *
   * - `date`: date
   *
   * @return OK
   */
  findAllMovieUsingGET1(params: SeatControllerService.FindAllMovieUsingGET1Params): __Observable<Array<SeatDto>> {
    return this.findAllMovieUsingGET1Response(params).pipe(
      __map(_r => _r.body as Array<SeatDto>)
    );
  }
}

module SeatControllerService {

  /**
   * Parameters for findAllMovieUsingGET1
   */
  export interface FindAllMovieUsingGET1Params {

    /**
     * time
     */
    time: string;

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

export { SeatControllerService }
