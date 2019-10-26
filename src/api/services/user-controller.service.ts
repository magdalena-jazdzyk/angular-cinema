/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getUserDataUsingGETPath = '/users';
  static readonly addUsingPOSTPath = '/users';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getUserDataUsingGETResponse(): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @return OK
   */
  getUserDataUsingGET(): __Observable<UserDto> {
    return this.getUserDataUsingGETResponse().pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param params The `UserControllerService.AddUsingPOSTParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `surname`:
   *
   * - `seansDto.seatCount`:
   *
   * - `seansDto.rowNumber`:
   *
   * - `seansDto.roomNumber`:
   *
   * - `seansDto.id`:
   *
   * - `roles`:
   *
   * - `reviewDto.userId`:
   *
   * - `reviewDto.movieId`:
   *
   * - `reviewDto.id`:
   *
   * - `reviewDto.description`:
   *
   * - `passwordConfirmation`:
   *
   * - `password`:
   *
   * - `name`:
   *
   * - `loyaltyCardDto.price`:
   *
   * - `loyaltyCardDto.maxTicket`:
   *
   * - `loyaltyCardDto.id`:
   *
   * - `loyaltyCardDto.expirationDate`:
   *
   * - `loyaltyCardDto.discount`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `age`:
   *
   * @return OK
   */
  addUsingPOSTResponse(params: UserControllerService.AddUsingPOSTParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.surname != null) __params = __params.set('surname', params.surname.toString());
    if (params.seansDtoSeatCount != null) __params = __params.set('seansDto.seatCount', params.seansDtoSeatCount.toString());
    if (params.seansDtoRowNumber != null) __params = __params.set('seansDto.rowNumber', params.seansDtoRowNumber.toString());
    if (params.seansDtoRoomNumber != null) __params = __params.set('seansDto.roomNumber', params.seansDtoRoomNumber.toString());
    if (params.seansDtoId != null) __params = __params.set('seansDto.id', params.seansDtoId.toString());
    (params.roles || []).forEach(val => {if (val != null) __params = __params.append('roles', val.toString())});
    if (params.reviewDtoUserId != null) __params = __params.set('reviewDto.userId', params.reviewDtoUserId.toString());
    if (params.reviewDtoMovieId != null) __params = __params.set('reviewDto.movieId', params.reviewDtoMovieId.toString());
    if (params.reviewDtoId != null) __params = __params.set('reviewDto.id', params.reviewDtoId.toString());
    if (params.reviewDtoDescription != null) __params = __params.set('reviewDto.description', params.reviewDtoDescription.toString());
    if (params.passwordConfirmation != null) __params = __params.set('passwordConfirmation', params.passwordConfirmation.toString());
    if (params.password != null) __params = __params.set('password', params.password.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.loyaltyCardDtoPrice != null) __params = __params.set('loyaltyCardDto.price', params.loyaltyCardDtoPrice.toString());
    if (params.loyaltyCardDtoMaxTicket != null) __params = __params.set('loyaltyCardDto.maxTicket', params.loyaltyCardDtoMaxTicket.toString());
    if (params.loyaltyCardDtoId != null) __params = __params.set('loyaltyCardDto.id', params.loyaltyCardDtoId.toString());
    if (params.loyaltyCardDtoExpirationDate != null) __params = __params.set('loyaltyCardDto.expirationDate', params.loyaltyCardDtoExpirationDate.toString());
    if (params.loyaltyCardDtoDiscount != null) __params = __params.set('loyaltyCardDto.discount', params.loyaltyCardDtoDiscount.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.age != null) __params = __params.set('age', params.age.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.AddUsingPOSTParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `surname`:
   *
   * - `seansDto.seatCount`:
   *
   * - `seansDto.rowNumber`:
   *
   * - `seansDto.roomNumber`:
   *
   * - `seansDto.id`:
   *
   * - `roles`:
   *
   * - `reviewDto.userId`:
   *
   * - `reviewDto.movieId`:
   *
   * - `reviewDto.id`:
   *
   * - `reviewDto.description`:
   *
   * - `passwordConfirmation`:
   *
   * - `password`:
   *
   * - `name`:
   *
   * - `loyaltyCardDto.price`:
   *
   * - `loyaltyCardDto.maxTicket`:
   *
   * - `loyaltyCardDto.id`:
   *
   * - `loyaltyCardDto.expirationDate`:
   *
   * - `loyaltyCardDto.discount`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `age`:
   *
   * @return OK
   */
  addUsingPOST(params: UserControllerService.AddUsingPOSTParams): __Observable<UserDto> {
    return this.addUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for addUsingPOST
   */
  export interface AddUsingPOSTParams {
    username?: string;
    surname?: string;
    seansDtoSeatCount?: number;
    seansDtoRowNumber?: number;
    seansDtoRoomNumber?: number;
    seansDtoId?: number;
    roles?: Array<string>;
    reviewDtoUserId?: number;
    reviewDtoMovieId?: number;
    reviewDtoId?: number;
    reviewDtoDescription?: string;
    passwordConfirmation?: string;
    password?: string;
    name?: string;
    loyaltyCardDtoPrice?: number;
    loyaltyCardDtoMaxTicket?: number;
    loyaltyCardDtoId?: number;
    loyaltyCardDtoExpirationDate?: string;
    loyaltyCardDtoDiscount?: number;
    id?: number;
    email?: string;
    age?: number;
  }
}

export { UserControllerService }
