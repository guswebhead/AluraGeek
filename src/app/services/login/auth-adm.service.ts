import { User } from './../../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmService {

  api = environment.api

  constructor(
    private http: HttpClient
  ) { }

  loginAdm(data:any): Observable<User> {
    return this.http.post<User>(this.api + '/users', data)
  }
}
