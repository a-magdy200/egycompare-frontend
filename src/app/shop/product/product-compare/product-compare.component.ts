import { Component, OnInit } from '@angular/core';
import {BaseProduct, CalculatorProduct, Product, StoreProduct} from '../../../shared/classes/Product';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {

  public products           :   BaseProduct[];

  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getCompareProducts();
  }

  // Add to cart
  public addToCart(product: CalculatorProduct, quantity: number = 1) {
     this.cartService.addToCart(product, quantity);
  }

  // Remove from compare list
  public removeItem(product: BaseProduct) {
    this.productsService.removeFromCompare(product);
    this.products = this.productsService.getCompareProducts();
  }

}
