import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productService = inject(ProductsService);

  async ngOnInit(){
    const products = await this.productService.getAll();
    console.log(products);
  }

}
