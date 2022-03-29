import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api = environment.api

  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<any>{
    return this.http.get(this.api + '/products')
  }
}
