/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Tokens } from '../models/tokens';
import { RefreshTokenData } from '../models/refresh-token-data';
import { InfoString } from '../models/info-string';
import { UserDto } from '../models/user-dto';

/**
 * Security Controller
 */
@Injectable({
  providedIn: 'root',
})
class SecurityControllerService extends __BaseService {
  static readonly refreshTokenActionUsingPOSTPath = '/security/refreshToken';
  static readonly registerUsingPOSTPath = '/security/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param refreshTokenData refreshTokenData
   * @return OK
   */
  refreshTokenActionUsingPOSTResponse(refreshTokenData: RefreshTokenData): __Observable<__StrictHttpResponse<Tokens>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = refreshTokenData;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/security/refreshToken`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tokens>;
      })
    );
  }
  /**
   * @param refreshTokenData refreshTokenData
   * @return OK
   */
  refreshTokenActionUsingPOST(refreshTokenData: RefreshTokenData): __Observable<Tokens> {
    return this.refreshTokenActionUsingPOSTResponse(refreshTokenData).pipe(
      __map(_r => _r.body as Tokens)
    );
  }

  /**
   * @param registrationUser registrationUser
   * @return OK
   */
  registerUsingPOSTResponse(registrationUser: UserDto): __Observable<__StrictHttpResponse<InfoString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registrationUser;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/security/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InfoString>;
      })
    );
  }
  /**
   * @param registrationUser registrationUser
   * @return OK
   */
  registerUsingPOST(registrationUser: UserDto): __Observable<InfoString> {
    return this.registerUsingPOSTResponse(registrationUser).pipe(
      __map(_r => _r.body as InfoString)
    );
  }
}

module SecurityControllerService {
}

export { SecurityControllerService }
