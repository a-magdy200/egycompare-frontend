import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Product, StoreProduct} from '../../../../shared/classes/Product';
import { CartItem } from '../../../../shared/classes/cart-item';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
declare var $: any;

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit, OnDestroy {

  public product           :   Product;
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedStore       :   StoreProduct;

  @Input() productSlug: string = '';
  @Output() terminate: EventEmitter<boolean> = new EventEmitter();
  constructor(private productsService: ProductsService, private cartService: CartService) {  }

  ngOnInit() {
    console.log(this.productSlug);
    this.productsService.getProduct(this.productSlug).subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    $('.quickviewm').modal('hide');
    this.productSlug = '';
    this.terminate.emit(true);
  }

  public increment() {
      this.counter += 1;
  }

  public decrement() {
      if (this.counter > 1) {
          this.counter -= 1;
      }
  }

   // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedColor = image;
  }

  // Change variant
  public changeStore(store) {
     this.selectedStore = store;
  }

  public addToCart(product: Product, quantity, store: StoreProduct) {
    if (quantity === 0) {
      return false;
    }
    console.log(product);
    console.log(store);
    this.cartService.addToCart(product, parseInt(quantity, 10), store);
  }

}
