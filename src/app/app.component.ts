import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './product-list/product-list.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductAngApp';
  }
