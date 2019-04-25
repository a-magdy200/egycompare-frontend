import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {BaseProduct, Product, StoreProduct} from '../classes/Product';
import { BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {ProductsResponse} from '../classes/response';
import {ActivatedRoute} from '@angular/router';

// Get product from Localstorage

@Injectable()

export class ProductsService {

  public currency = 'USD';
  public catalogMode = false;

  // public compareProducts: BehaviorSubject<BaseProduct[]> = new BehaviorSubject([]);
  public observer:  Subscriber<{}>;
  private compareCategory: string = '';

  // Initialize
  constructor(private http: HttpClient, private toastrService: ToastrService, private route: ActivatedRoute) {
     // this.compareProducts.subscribe(_products => localStorage.setItem('compareItem', JSON.stringify(_products)));
  }

  // Observable Product Array
  private products(): Observable<any> {
     return this.http.get('assets/data/jsons/products/product.json');
  }
  public getCategories() {
    return this.http.get('assets/data/jsons/categories.json');
  }
  // Get Products
  public getProducts(): Observable<Product[]> {
    return this.products();
  }
  public getProduct(slug: string): Observable<Product> {
    return this.http.get<Product>('assets/data/jsons/product-id.json');
  }
  public getProductsByCategory(category: string, page: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>('assets/data/jsons/category-products.json');
  }

   /*
      ---------------------------------------------
      ----------  Compare Product  ----------------
      ---------------------------------------------
   */

  // Get Compare Products
  public getCompareProducts(): BaseProduct[] {
    return JSON.parse(localStorage.getItem('compareItem'));
  }

  // If item is already added In compare
  public hasProduct(product: BaseProduct): boolean {
    const products = this.getCompareProducts();
    const item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Add to compare
  public addToCompare(product: BaseProduct): void {
    if (this.hasProduct(product)) {
      this.toastrService.info('Product already exists in compare list.');
    } else {
      const category = product.category,
            products = this.getCompareProducts();
      console.log(products);
        if (products.length === 0) {
          this.compareCategory = category;
        }
        if (category === this.compareCategory) {
          if (products.length < 4) {
            products.push(product);
            this.toastrService.success('Added to compare group.');
          } else {
            this.toastrService.warning('Maximum 4 products are in compare.');
          } // toasr services
        } else {
          this.toastrService.warning('You cannot compare items from different categories.');
        }
        localStorage.setItem('compareItem', JSON.stringify(products));
        console.log(this.getCompareProducts());
        return;
    }
  }

  // Removed Product
  public removeFromCompare(product: BaseProduct) {
    if (product === undefined) { return; }
    const products = this.getCompareProducts();
    const index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem('compareItem', JSON.stringify(products));
  }

}
