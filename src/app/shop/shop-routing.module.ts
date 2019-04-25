import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsCollectionComponent } from './product/collection/products-collection/products-collection.component';
import { ProductDetailsComponent } from './product/product-details/product-component/product-details.component';
import { SearchComponent } from './product/search/search.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';

// Routes
const routes: Routes = [
  {
    path: 'one',
    component: HomeComponent
  },
  {
    path: 'categories/:category',
    component: ProductsCollectionComponent
  },
  {
    path: 'product/:slug',
    component: ProductDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'compare',
    component: ProductCompareComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'checkout/success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
