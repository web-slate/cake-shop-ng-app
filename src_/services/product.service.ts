import { Injectable, OnInit } from '@angular/core';
import { IProduct } from './product.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }
  getProductsList(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('https://fakestoreapi.com/products')
  }

  getProductDetails(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
  }

}
