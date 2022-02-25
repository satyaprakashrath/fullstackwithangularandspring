import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl : string = 'http://localhost:8080/api/products';

  products : Product[] =[];
  constructor(private http : HttpClient) { }

  getProductList() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe()

  }
}
