import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
 
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "https://fakestoreapi.com/products";
  }
 
  getAllProduct(): Observable<Product[]> {
   return this.http.get < Product[] >(this.baseUrl);
  }
}
