import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);
  baseUrl= 'http://localhost:3000/api/products';
  constructor() { }

  getAll() {
     
    return firstValueFrom( this.httpClient.get<any[]>(this.baseUrl) 
    );
    
  }

  getById(productId: string){
   return this.httpClient.get<any>( `${this.baseUrl}/${productId}` )
  }
}
