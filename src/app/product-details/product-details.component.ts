import { Component, OnInit } from '@angular/core';

/*
Error: src/app/product-details/product-details.component.ts:2:26 - error TS2724: '"../../../node_modules/@angular/router/router"' has no exported member named 'ActivateedRoute'. Did you mean 'ActivatedRoute'?

2 import { ActivatedRoute, ActivateedRoute } from '@angular/router';
                           ~~~~~~~~~~~~~~~

  node_modules/@angular/router/router.d.ts:54:22
    54 export declare class ActivatedRoute {
                            ~~~~~~~~~~~~~~
    'ActivatedRoute' is declared here.


*/
/*
import { ActivatedRoute, ActivateedRoute } from '@angular/router';  /* TODO:ローカルでのng serveでエラー　*/

import { ActivatedRoute } from '@angular/router';  /* TODO:ローカルでのng serveでエラー　*/

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

/*
Error: src/app/product-details/product-details.component.ts:30:13 - error TS7006: Parameter 'product' implicitly has an 'any' type.

30   addToCart(product) {
               ~~~~~~~

*/
  addToCart(product): any {                      /* TODO:ローカルでのng serveでエラー　*/
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}

