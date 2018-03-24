import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URL_REST_API, URL_REST_API_ADD_ALL, URL_REST_API_ADD_ONE, URL_REST_API_DEL_ALL, URL_REST_API_DEL_ONE, URL_REST_API_GET_ALL,
    URL_REST_API_GET_ONE, URL_REST_API_UPD_ALL, URL_REST_API_UPD_ONE } from '../url.constants';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  {{#ifIn 'GET' entityMethods }}
  load{{ properCase plural }}(): Observable<any> {
    return this.http.get(URL_REST_API_GET_ALL);
  }
  load{{ properCase name }}(params?: HttpParams): Observable<any> {
    return this.http.get(URL_REST_API_GET_ONE, { params: params });
  }

  {{/ifIn}}
  {{#ifIn 'CREATE' entityMethods }}
  add{{ properCase name }}(param: any): Observable<any> {
    return this.http.post(URL_REST_API_ADD_ONE, { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'CREATE_MANY' entityMethods }}
  add{{ properCase plural }}(param: any): Observable<any> {
    return this.http.post(URL_REST_API_ADD_ALL, { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE' entityMethods }}
  update{{ properCase name }}(param: any): Observable<any> {
    return this.http.patch(URL_REST_API_UPD_ONE, { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'UPDATE_MANY' entityMethods }}
  update{{ properCase plural }}(param: any): Observable<any> {
    return this.http.patch(URL_REST_API_UPD_ALL, { body: param });
  }

  {{/ifIn}}
  {{#ifIn 'DELETE' entityMethods }}
  delete{{ properCase name }}(param: any): Observable<any> {
    return this.http.delete(URL_REST_API_DEL_ONE);
  }

  {{/ifIn}}
  {{#ifIn 'DELETE_MANY' entityMethods }}
  delete{{ properCase plural }}(param: any): Observable<any> {
    return this.http.delete(URL_REST_API_DEL_ALL);
  }
  {{/ifIn}}
}
