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
  static readonly addUsingPOST2Path = '/users';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserControllerService.AddUsingPOST2Params` containing the following parameters:
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
   * - `reviewDto.userDto.username`:
   *
   * - `reviewDto.userDto.surname`:
   *
   * - `reviewDto.userDto.seansDto.seatCount`:
   *
   * - `reviewDto.userDto.seansDto.rowNumber`:
   *
   * - `reviewDto.userDto.seansDto.roomNumber`:
   *
   * - `reviewDto.userDto.seansDto.id`:
   *
   * - `reviewDto.userDto.roles`:
   *
   * - `reviewDto.userDto.passwordConfirmation`:
   *
   * - `reviewDto.userDto.password`:
   *
   * - `reviewDto.userDto.name`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.price`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.maxTicket`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.id`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.expirationDate`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.discount`:
   *
   * - `reviewDto.userDto.id`:
   *
   * - `reviewDto.userDto.email`:
   *
   * - `reviewDto.userDto.age`:
   *
   * - `reviewDto.id`:
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
  addUsingPOST2Response(params: UserControllerService.AddUsingPOST2Params): __Observable<__StrictHttpResponse<UserDto>> {
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
    if (params.reviewDtoUserDtoUsername != null) __params = __params.set('reviewDto.userDto.username', params.reviewDtoUserDtoUsername.toString());
    if (params.reviewDtoUserDtoSurname != null) __params = __params.set('reviewDto.userDto.surname', params.reviewDtoUserDtoSurname.toString());
    if (params.reviewDtoUserDtoSeansDtoSeatCount != null) __params = __params.set('reviewDto.userDto.seansDto.seatCount', params.reviewDtoUserDtoSeansDtoSeatCount.toString());
    if (params.reviewDtoUserDtoSeansDtoRowNumber != null) __params = __params.set('reviewDto.userDto.seansDto.rowNumber', params.reviewDtoUserDtoSeansDtoRowNumber.toString());
    if (params.reviewDtoUserDtoSeansDtoRoomNumber != null) __params = __params.set('reviewDto.userDto.seansDto.roomNumber', params.reviewDtoUserDtoSeansDtoRoomNumber.toString());
    if (params.reviewDtoUserDtoSeansDtoId != null) __params = __params.set('reviewDto.userDto.seansDto.id', params.reviewDtoUserDtoSeansDtoId.toString());
    (params.reviewDtoUserDtoRoles || []).forEach(val => {if (val != null) __params = __params.append('reviewDto.userDto.roles', val.toString())});
    if (params.reviewDtoUserDtoPasswordConfirmation != null) __params = __params.set('reviewDto.userDto.passwordConfirmation', params.reviewDtoUserDtoPasswordConfirmation.toString());
    if (params.reviewDtoUserDtoPassword != null) __params = __params.set('reviewDto.userDto.password', params.reviewDtoUserDtoPassword.toString());
    if (params.reviewDtoUserDtoName != null) __params = __params.set('reviewDto.userDto.name', params.reviewDtoUserDtoName.toString());
    if (params.reviewDtoUserDtoLoyaltyCardDtoPrice != null) __params = __params.set('reviewDto.userDto.loyaltyCardDto.price', params.reviewDtoUserDtoLoyaltyCardDtoPrice.toString());
    if (params.reviewDtoUserDtoLoyaltyCardDtoMaxTicket != null) __params = __params.set('reviewDto.userDto.loyaltyCardDto.maxTicket', params.reviewDtoUserDtoLoyaltyCardDtoMaxTicket.toString());
    if (params.reviewDtoUserDtoLoyaltyCardDtoId != null) __params = __params.set('reviewDto.userDto.loyaltyCardDto.id', params.reviewDtoUserDtoLoyaltyCardDtoId.toString());
    if (params.reviewDtoUserDtoLoyaltyCardDtoExpirationDate != null) __params = __params.set('reviewDto.userDto.loyaltyCardDto.expirationDate', params.reviewDtoUserDtoLoyaltyCardDtoExpirationDate.toString());
    if (params.reviewDtoUserDtoLoyaltyCardDtoDiscount != null) __params = __params.set('reviewDto.userDto.loyaltyCardDto.discount', params.reviewDtoUserDtoLoyaltyCardDtoDiscount.toString());
    if (params.reviewDtoUserDtoId != null) __params = __params.set('reviewDto.userDto.id', params.reviewDtoUserDtoId.toString());
    if (params.reviewDtoUserDtoEmail != null) __params = __params.set('reviewDto.userDto.email', params.reviewDtoUserDtoEmail.toString());
    if (params.reviewDtoUserDtoAge != null) __params = __params.set('reviewDto.userDto.age', params.reviewDtoUserDtoAge.toString());
    if (params.reviewDtoId != null) __params = __params.set('reviewDto.id', params.reviewDtoId.toString());
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
   * @param params The `UserControllerService.AddUsingPOST2Params` containing the following parameters:
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
   * - `reviewDto.userDto.username`:
   *
   * - `reviewDto.userDto.surname`:
   *
   * - `reviewDto.userDto.seansDto.seatCount`:
   *
   * - `reviewDto.userDto.seansDto.rowNumber`:
   *
   * - `reviewDto.userDto.seansDto.roomNumber`:
   *
   * - `reviewDto.userDto.seansDto.id`:
   *
   * - `reviewDto.userDto.roles`:
   *
   * - `reviewDto.userDto.passwordConfirmation`:
   *
   * - `reviewDto.userDto.password`:
   *
   * - `reviewDto.userDto.name`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.price`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.maxTicket`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.id`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.expirationDate`:
   *
   * - `reviewDto.userDto.loyaltyCardDto.discount`:
   *
   * - `reviewDto.userDto.id`:
   *
   * - `reviewDto.userDto.email`:
   *
   * - `reviewDto.userDto.age`:
   *
   * - `reviewDto.id`:
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
  addUsingPOST2(params: UserControllerService.AddUsingPOST2Params): __Observable<UserDto> {
    return this.addUsingPOST2Response(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for addUsingPOST2
   */
  export interface AddUsingPOST2Params {
    username?: string;
    surname?: string;
    seansDtoSeatCount?: number;
    seansDtoRowNumber?: number;
    seansDtoRoomNumber?: number;
    seansDtoId?: number;
    roles?: Array<string>;
    reviewDtoUserDtoUsername?: string;
    reviewDtoUserDtoSurname?: string;
    reviewDtoUserDtoSeansDtoSeatCount?: number;
    reviewDtoUserDtoSeansDtoRowNumber?: number;
    reviewDtoUserDtoSeansDtoRoomNumber?: number;
    reviewDtoUserDtoSeansDtoId?: number;
    reviewDtoUserDtoRoles?: Array<string>;
    reviewDtoUserDtoPasswordConfirmation?: string;
    reviewDtoUserDtoPassword?: string;
    reviewDtoUserDtoName?: string;
    reviewDtoUserDtoLoyaltyCardDtoPrice?: number;
    reviewDtoUserDtoLoyaltyCardDtoMaxTicket?: number;
    reviewDtoUserDtoLoyaltyCardDtoId?: number;
    reviewDtoUserDtoLoyaltyCardDtoExpirationDate?: string;
    reviewDtoUserDtoLoyaltyCardDtoDiscount?: number;
    reviewDtoUserDtoId?: number;
    reviewDtoUserDtoEmail?: string;
    reviewDtoUserDtoAge?: number;
    reviewDtoId?: number;
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
