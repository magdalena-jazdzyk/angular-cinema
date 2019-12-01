/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TemplateDto } from '../models/template-dto';
import { PageTemplateDto } from '../models/page-template-dto';

/**
 * Template Controller
 */
@Injectable({
  providedIn: 'root',
})
class TemplateControllerService extends __BaseService {
  static readonly addTemplateUsingPOSTPath = '/templates';
  static readonly downloadFile1UsingGETPath = '/templates/download/{repertoireId}';
  static readonly findOneTemplateByIdUsingGETPath = '/templates/{id}';
  static readonly updateTemplateUsingPUTPath = '/templates/{id}';
  static readonly deleteTemplateUsingDELETEPath = '/templates/{id}';
  static readonly findAllTemplateUsingGETPath = '/templates/{page}/{size}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param templateDto templateDto
   * @return OK
   */
  addTemplateUsingPOSTResponse(templateDto: TemplateDto): __Observable<__StrictHttpResponse<TemplateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = templateDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/templates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TemplateDto>;
      })
    );
  }
  /**
   * @param templateDto templateDto
   * @return OK
   */
  addTemplateUsingPOST(templateDto: TemplateDto): __Observable<TemplateDto> {
    return this.addTemplateUsingPOSTResponse(templateDto).pipe(
      __map(_r => _r.body as TemplateDto)
    );
  }

  /**
   * @param repertoireId repertoireId
   * @return OK
   */
  downloadFile1UsingGETResponse(repertoireId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/templates/download/${repertoireId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param repertoireId repertoireId
   * @return OK
   */
  downloadFile1UsingGET(repertoireId: number): __Observable<string> {
    return this.downloadFile1UsingGETResponse(repertoireId).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findOneTemplateByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<TemplateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/templates/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TemplateDto>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findOneTemplateByIdUsingGET(id: number): __Observable<TemplateDto> {
    return this.findOneTemplateByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as TemplateDto)
    );
  }

  /**
   * @param params The `TemplateControllerService.UpdateTemplateUsingPUTParams` containing the following parameters:
   *
   * - `templateDto`: templateDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateTemplateUsingPUTResponse(params: TemplateControllerService.UpdateTemplateUsingPUTParams): __Observable<__StrictHttpResponse<TemplateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.templateDto;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/templates/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TemplateDto>;
      })
    );
  }
  /**
   * @param params The `TemplateControllerService.UpdateTemplateUsingPUTParams` containing the following parameters:
   *
   * - `templateDto`: templateDto
   *
   * - `id`: id
   *
   * @return OK
   */
  updateTemplateUsingPUT(params: TemplateControllerService.UpdateTemplateUsingPUTParams): __Observable<TemplateDto> {
    return this.updateTemplateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as TemplateDto)
    );
  }

  /**
   * @param id id
   */
  deleteTemplateUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/templates/${id}`,
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
  deleteTemplateUsingDELETE(id: number): __Observable<null> {
    return this.deleteTemplateUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TemplateControllerService.FindAllTemplateUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTemplateUsingGETResponse(params: TemplateControllerService.FindAllTemplateUsingGETParams): __Observable<__StrictHttpResponse<PageTemplateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/templates/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTemplateDto>;
      })
    );
  }
  /**
   * @param params The `TemplateControllerService.FindAllTemplateUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTemplateUsingGET(params: TemplateControllerService.FindAllTemplateUsingGETParams): __Observable<PageTemplateDto> {
    return this.findAllTemplateUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTemplateDto)
    );
  }
}

module TemplateControllerService {

  /**
   * Parameters for updateTemplateUsingPUT
   */
  export interface UpdateTemplateUsingPUTParams {

    /**
     * templateDto
     */
    templateDto: TemplateDto;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for findAllTemplateUsingGET
   */
  export interface FindAllTemplateUsingGETParams {

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

export { TemplateControllerService }
