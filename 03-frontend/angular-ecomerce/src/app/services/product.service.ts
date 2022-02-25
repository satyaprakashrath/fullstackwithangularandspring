import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  response : GetResponse|undefined;
  private baseUrl : string = 'http://localhost:8080/api/products';

  constructor(private http : HttpClient) { }

  getProductList() : Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    )
  }

  getList() : void {
    this.http.get<GetResponse>(this.baseUrl).subscribe(
       data => {
        console.log("data received:", data)
      }
    )
  }
}

interface GetResponse {
  _embedded : {
    products : Product[];
  }
}
