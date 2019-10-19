/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReservationDto } from '../models/reservation-dto';
import { PageReservationDto } from '../models/page-reservation-dto';

/**
 * Reservation Controller
 */
@Injectable({
  providedIn: 'root',
})
class ReservationControllerService extends __BaseService {
  static readonly addUsingPOST1Path = '/reservations';
  static readonly findAllUsingGET1Path = '/reservations/{page}/{size}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param reservationDto reservationDto
   * @return OK
   */
  addUsingPOST1Response(reservationDto: ReservationDto): __Observable<__StrictHttpResponse<ReservationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reservationDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/reservations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationDto>;
      })
    );
  }
  /**
   * @param reservationDto reservationDto
   * @return OK
   */
  addUsingPOST1(reservationDto: ReservationDto): __Observable<ReservationDto> {
    return this.addUsingPOST1Response(reservationDto).pipe(
      __map(_r => _r.body as ReservationDto)
    );
  }

  /**
   * @param params The `ReservationControllerService.FindAllUsingGET1Params` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsingGET1Response(params: ReservationControllerService.FindAllUsingGET1Params): __Observable<__StrictHttpResponse<PageReservationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reservations/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageReservationDto>;
      })
    );
  }
  /**
   * @param params The `ReservationControllerService.FindAllUsingGET1Params` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsingGET1(params: ReservationControllerService.FindAllUsingGET1Params): __Observable<PageReservationDto> {
    return this.findAllUsingGET1Response(params).pipe(
      __map(_r => _r.body as PageReservationDto)
    );
  }
}

module ReservationControllerService {

  /**
   * Parameters for findAllUsingGET1
   */
  export interface FindAllUsingGET1Params {

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

export { ReservationControllerService }
