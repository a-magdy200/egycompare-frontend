import { Injectable } from '@angular/core';
import {CalculatorProduct, Product, StoreProduct} from '../classes/Product';
import { CartItem } from '../classes/cart-item';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Get product from Localstorage
let products = JSON.parse(localStorage.getItem('cartItem')) || [];

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // Array
  public cartItems  :  BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;

  constructor(private toastrService: ToastrService) {
      this.cartItems.subscribe(products => products = products);
  }

  // Get Products
  public getItems(): Observable<CartItem[]> {
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsStream;
  }


  // Add to cart
  public addToCart(product: CalculatorProduct, quantity: number, store?: StoreProduct): CartItem | boolean {
    let item: CartItem | boolean = false;
    // If out of stock
    if (!store.stock) {
      this.toastrService.warning('This product is out of stock at store: <strong>' + store.name + '</strong> .');
      return;
    }
    // If Products exist
    const hasItem = products.find(cartItem => {
      if (cartItem.product.id === product.id && cartItem.store.id === store.id) {
        this.toastrService.info('This product for store: <strong>' + store.name + '</strong> already exists in calculator.');
        return true;
      }
    });
    // If Products does not exist (Add New Products)
    if (!hasItem && store.stock) {
      item = { product, quantity, store };
      products.push(item);
      this.toastrService.success('This product has been added to calculator.');
    }
    localStorage.setItem('cartItem', JSON.stringify(products));
    return item;
  }

  // Update Cart Value
  public updateCartQuantity(product: Product, quantity: number): CartItem | boolean {
    return products.find((items, index) => {
      if (items.product.id === product.id) {
        const qty = products[index].quantity + quantity;
        if (qty < 1) {
          this.toastrService.error('You can\'t have a quantity less than 1.');
          return false;
        }
        products[index]['quantity'] = qty;
        localStorage.setItem('cartItem', JSON.stringify(products));
        return true;
      }
    });
  }

  // Calculate Product stock Counts
  public calculateStockCounts(product: CartItem, quantity: number): CartItem | Boolean {
    const qty   = product.quantity + quantity;
    const stock = product.store.stock;
    if (!stock) {
      this.toastrService.error('You can not add more items than available. ' +
        'Store: ' + product.store.name + ' is out of stock for this item <' + product.product.name + '>.');
      return false;
    }
    return true;
  }

  // Removed in cart
  public removeFromCart(item: CartItem) {
    if (item === undefined) {
      return false;
    }
    const index = products.indexOf(item);
    products.splice(index, 1);
    localStorage.setItem('cartItem', JSON.stringify(products));
  }

  // Total amount
  public getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: CartItem[]) => {
      return products.reduce((prev, curr: CartItem) => {
        return prev + curr.store.price * curr.quantity;
      }, 0);
    }));
  }


}
