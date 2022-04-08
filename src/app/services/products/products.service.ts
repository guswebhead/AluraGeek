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

  getProducts(): Observable<any> {
    return this.http.get(this.api + '/products')
  }

  addProd(name: string, price: number, descript: string, arquivo: any): Observable<any> {
    const formData = new FormData();
    const type = "anothers"
    formData.append('imageFile', arquivo);
    return this.http.post(this.api + '/products', {'title': name,'price': price,'type': type,"description": descript,"img": arquivo })
  }
}
