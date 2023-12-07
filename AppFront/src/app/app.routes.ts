import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';

export const routes: Routes = [
    {path: 'products', component: ProductsListComponent},
    {path: 'products/:productId', component: DetailProductComponent}
];
