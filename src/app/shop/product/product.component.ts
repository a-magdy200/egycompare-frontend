import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseProduct, CalculatorProduct, Product, StoreProduct} from '../../shared/classes/Product';
import { CartItem } from '../../shared/classes/cart-item';
import { ProductsService } from '../../shared/services/products.service';
import { WishlistService } from '../../shared/services/wishlist.service';
import { CartService } from '../../shared/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() product: BaseProduct;
  @Output() productSlug: EventEmitter<string> = new EventEmitter();
  public variantImage: any = '';
  public selectedItem: any = '';

  constructor(private router: Router, public productsService: ProductsService,
    private wishlistService: WishlistService, private cartService: CartService, private route: ActivatedRoute) {
  }

  ngOnInit() { }

  public openModal() {
    console.log(this.product.slug);
    this.productSlug.emit(this.product.slug);
  }
  // Add to cart
  public addToCart(store: StoreProduct) {
    this.cartService.addToCart(this.product, 1, store);
  }

  // Add to compare
  public addToCompare(product: BaseProduct) {
    this.productsService.addToCompare(product);
  }

  // Add to wishlist
  public addToWishlist(product: BaseProduct) {
    this.productsService.getProduct(product.slug).subscribe( (productDetailed: Product) => {
     this.wishlistService.addToWishlist(productDetailed);
    });
  }

 // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedItem = image;
  }

}
