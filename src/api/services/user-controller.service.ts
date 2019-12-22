/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { PageUserDto } from '../models/page-user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getUserDataUsingGETPath = '/users';
  static readonly addUsingPOSTPath = '/users';
  static readonly findAllUsersUsingGETPath = '/users/all/{page}/{size}';
  static readonly updateUserUsingPUTPath = '/users/{id}';
  static readonly deleteUserUsingDELETEPath = '/users/{id}';
  static readonly updateCurrentUserUsingPATCHPath = '/users/{username}{email}';

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

  /**
   * @param params The `UserControllerService.FindAllUsersUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsersUsingGETResponse(params: UserControllerService.FindAllUsersUsingGETParams): __Observable<__StrictHttpResponse<PageUserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/all/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageUserDto>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.FindAllUsersUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUsersUsingGET(params: UserControllerService.FindAllUsersUsingGETParams): __Observable<PageUserDto> {
    return this.findAllUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageUserDto)
    );
  }

  /**
   * @param params The `UserControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `userDto`: userDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUserUsingPUTResponse(params: UserControllerService.UpdateUserUsingPUTParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userDto;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.id}`,
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
   * @param params The `UserControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `userDto`: userDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUserUsingPUT(params: UserControllerService.UpdateUserUsingPUTParams): __Observable<UserDto> {
    return this.updateUserUsingPUTResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param id id
   */
  deleteUserUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteUserUsingDELETE(id: number): __Observable<null> {
    return this.deleteUserUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `UserControllerService.UpdateCurrentUserUsingPATCHParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `email`: email
   */
  updateCurrentUserUsingPATCHResponse(params: UserControllerService.UpdateCurrentUserUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/users/${params.username}${params.email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.UpdateCurrentUserUsingPATCHParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `email`: email
   */
  updateCurrentUserUsingPATCH(params: UserControllerService.UpdateCurrentUserUsingPATCHParams): __Observable<null> {
    return this.updateCurrentUserUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
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
    id?: number;
    email?: string;
    age?: number;
  }

  /**
   * Parameters for findAllUsersUsingGET
   */
  export interface FindAllUsersUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }

  /**
   * Parameters for updateUserUsingPUT
   */
  export interface UpdateUserUsingPUTParams {

    /**
     * userDto
     */
    userDto: UserDto;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateCurrentUserUsingPATCH
   */
  export interface UpdateCurrentUserUsingPATCHParams {

    /**
     * username
     */
    username: string;

    /**
     * email
     */
    email: string;
  }
}

export { UserControllerService }
