import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Product, StoreProduct} from '../../../../shared/classes/Product';
import { ProductsService } from '../../../../shared/services/products.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import * as $ from 'jquery';
import {Stock} from '../../../../shared/classes/common';
import {BaseProduct, CalculatorProduct} from '../../../../shared/classes/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product            :   Product;
  public products           :   Product[];
  public counter            :   number = 1;
  public selectedSize       :   any = '';
  public stores: StoreProduct[] = [];
  public stock: Stock = { in_stock: false, storesCount: 0};
  public filters: string[] = [];

  // Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService, private wishlistService: WishlistService,
    private cartService: CartService) {
      this.route.params.subscribe(params => {
        const slug = params['slug'];
        this.productsService.getProduct(slug).subscribe((product: Product) => {
          this.product = product;
          product.stores.map( (store: StoreProduct) => {
            if (store.stock) {
              this.stock.in_stock = true;
              this.stock.storesCount++;
            }
          });
          this.stores = product.stores;
          this.filters = Object.keys(product.filter_options);
          console.log(this.filters);
          this.filters.map(filter => {
            console.log(product.filter_options[filter]);
          });
        });
      });
  }

  ngOnInit() {
    // document.body.onload = function () {
    //   $('[data-toggle="popover"]').popover();
    // };
  }

  // product zoom
  onMouseOver(): void {
    document.getElementById('p-zoom').classList.add('product-zoom');
  }

  onMouseOut(): void {
    document.getElementById('p-zoom').classList.remove('product-zoom');
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  public slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  };

  public increment() {
      this.counter += 1;
  }

  public decrement() {
      if (this.counter > 1) {
         this.counter -= 1;
      }
  }

  // For mobile filter view
  public mobileSidebar() {
    $('.collection-filter').css('left', '-15px');
  }

  public addToCart(store: StoreProduct) {
    this.cartService.addToCart(this.product, 1, store);
  }

  // Add to compare
  public addToCompare() {
    this.productsService.addToCompare(this.product);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
     this.wishlistService.addToWishlist(product);
  }


  // Change size variant
  public changeSizeVariant(variant) {
     this.selectedSize = variant;
  }

}
