import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import Domain from './Domain';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DomainService {

  constructor() {}
  private http: Http;

  send(domain: Domain): Observable<Domain>{
    return this.http
               .post(`http://127.0.0.1:3030/domain/`, domain)
               .map(response => response.json().data as Domain);
  }
}
