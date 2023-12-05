import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { ProductsListComponent } from './components/products/products-list/products-list.component';

export const routes: Routes = [
    {path: 'product', component: ProductsListComponent},
    /* {path: 'products/:productId', component: } */
];
