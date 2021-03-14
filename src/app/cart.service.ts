import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

/*
Error: src/app/cart.service.ts:15:13 - error TS7006: Parameter 'product' implicitly has an 'any' type.

15   addToCart(product) {
               ~~~~~~~


Error: src/app/cart.service.ts:16:21 - error TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.

16     this.items.push(product);
                       ~~~~~~~

*/
  addToCart(product: any): void {            /* TODO:ローカルでのng serveでエラー　*/
    this.items.push(product);     /* TODO:ローカルでのng serveでエラー　*/
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): any {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): any {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
