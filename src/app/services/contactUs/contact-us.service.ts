import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  api = environment.api

  constructor(
    private http: HttpClient
  ) { }

  postMessage(message: any): Observable<any> {
    return this.http.post(this.api + '/contactUs', message)
  }
}
