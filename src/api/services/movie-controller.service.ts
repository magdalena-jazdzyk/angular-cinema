/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MovieDto } from '../models/movie-dto';
import { PageMovieDto } from '../models/page-movie-dto';

/**
 * Movie Controller
 */
@Injectable({
  providedIn: 'root',
})
class MovieControllerService extends __BaseService {
  static readonly addMovieUsingPOSTPath = '/movies';
  static readonly updateUsingPUTPath = '/movies';
  static readonly findOneUsingGETPath = '/movies/{id}';
  static readonly deleteUsingDELETEPath = '/movies/{id}';
  static readonly findAllMovieUsingGETPath = '/movies/{page}/{size}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param movieDto movieDto
   * @return OK
   */
  addMovieUsingPOSTResponse(movieDto: MovieDto): __Observable<__StrictHttpResponse<MovieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = movieDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/movies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieDto>;
      })
    );
  }
  /**
   * @param movieDto movieDto
   * @return OK
   */
  addMovieUsingPOST(movieDto: MovieDto): __Observable<MovieDto> {
    return this.addMovieUsingPOSTResponse(movieDto).pipe(
      __map(_r => _r.body as MovieDto)
    );
  }

  /**
   * @param params The `MovieControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `releaseDate`:
   *
   * - `price`:
   *
   * - `id`:
   *
   * - `genre`:
   *
   * - `duration`:
   *
   * - `description`:
   *
   * @return OK
   */
  updateUsingPUTResponse(params: MovieControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<MovieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.title != null) __params = __params.set('title', params.title.toString());
    if (params.releaseDate != null) __params = __params.set('releaseDate', params.releaseDate.toString());
    if (params.price != null) __params = __params.set('price', params.price.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.genre != null) __params = __params.set('genre', params.genre.toString());
    if (params.duration != null) __params = __params.set('duration', params.duration.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/movies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieDto>;
      })
    );
  }
  /**
   * @param params The `MovieControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `releaseDate`:
   *
   * - `price`:
   *
   * - `id`:
   *
   * - `genre`:
   *
   * - `duration`:
   *
   * - `description`:
   *
   * @return OK
   */
  updateUsingPUT(params: MovieControllerService.UpdateUsingPUTParams): __Observable<MovieDto> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as MovieDto)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findOneUsingGETResponse(id: number): __Observable<__StrictHttpResponse<MovieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movies/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieDto>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findOneUsingGET(id: number): __Observable<MovieDto> {
    return this.findOneUsingGETResponse(id).pipe(
      __map(_r => _r.body as MovieDto)
    );
  }

  /**
   * @param id id
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/movies/${id}`,
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
  deleteUsingDELETE(id: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `MovieControllerService.FindAllMovieUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllMovieUsingGETResponse(params: MovieControllerService.FindAllMovieUsingGETParams): __Observable<__StrictHttpResponse<PageMovieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movies/${params.page}/${params.size}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageMovieDto>;
      })
    );
  }
  /**
   * @param params The `MovieControllerService.FindAllMovieUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllMovieUsingGET(params: MovieControllerService.FindAllMovieUsingGETParams): __Observable<PageMovieDto> {
    return this.findAllMovieUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageMovieDto)
    );
  }
}

module MovieControllerService {

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {
    title?: string;
    releaseDate?: string;
    price?: number;
    id?: number;
    genre?: string;
    duration?: number;
    description?: string;
  }

  /**
   * Parameters for findAllMovieUsingGET
   */
  export interface FindAllMovieUsingGETParams {

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

export { MovieControllerService }
