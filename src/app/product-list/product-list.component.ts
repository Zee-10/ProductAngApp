import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductlistService } from '../product.service'
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductlistComponent {
  products: Product[];
 
  constructor(private prodSvc: ProductlistService) {
    this.products = [];
    this.getAll();
  }
  getAll() {
 
    this.prodSvc.getAllProduct().subscribe({
      next: (response: any) => {
        this.products = response;
        console.log(this.products);
      }, error: (err) => console.log(err)
    });
  }
 
}
