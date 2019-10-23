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
  static readonly addReservationUsingPOSTPath = '/reservations';
  static readonly findAllReservationUsingGETPath = '/reservations/{page}/{size}';

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
  addReservationUsingPOSTResponse(reservationDto: ReservationDto): __Observable<__StrictHttpResponse<ReservationDto>> {
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
  addReservationUsingPOST(reservationDto: ReservationDto): __Observable<ReservationDto> {
    return this.addReservationUsingPOSTResponse(reservationDto).pipe(
      __map(_r => _r.body as ReservationDto)
    );
  }

  /**
   * @param params The `ReservationControllerService.FindAllReservationUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllReservationUsingGETResponse(params: ReservationControllerService.FindAllReservationUsingGETParams): __Observable<__StrictHttpResponse<PageReservationDto>> {
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
   * @param params The `ReservationControllerService.FindAllReservationUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllReservationUsingGET(params: ReservationControllerService.FindAllReservationUsingGETParams): __Observable<PageReservationDto> {
    return this.findAllReservationUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageReservationDto)
    );
  }
}

module ReservationControllerService {

  /**
   * Parameters for findAllReservationUsingGET
   */
  export interface FindAllReservationUsingGETParams {

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
