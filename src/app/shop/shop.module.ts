import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from 'ngx-bar-rating';
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import {NgxImgZoomComponent, NgxImgZoomModule} from 'ngx-img-zoom';
// Home-one components
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { ServicesComponent } from './home/services/services.component';
import { BlogComponent } from './home/blog/blog.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { LogoComponent } from './home/logo/logo.component';
// Products Components
import { ProductComponent } from './product/product.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductBoxVerticalComponent } from './product/product-box-vertical/product-box-vertical.component';
import { ProductsCollectionComponent } from './product/collection/products-collection/products-collection.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
import { ProductDetailsComponent } from './product/product-details/product-component/product-details.component';
import { RelatedProductsComponent } from './product/product-details/related-products/related-products.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { QuickViewComponent } from './product/widgets/quick-view/quick-view.component';
import { ModalCartComponent } from './product/widgets/modal-cart/modal-cart.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';
import { ExitPopupComponent } from './product/widgets/exit-popup/exit-popup.component';
import { FiltersComponent} from './product/collection/filter/filters/filters.component';

@NgModule({
  exports: [ExitPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    RangeSliderModule,
    InfiniteScrollModule,
    NgxPayPalModule,
    NgxImgZoomModule
  ],
  declarations: [
    // Home one
    HomeComponent,
    SliderComponent,
    CollectionBannerComponent,
    ProductSliderComponent,
    ParallaxBannerComponent,
    ProductTabComponent,
    ServicesComponent,
    BlogComponent,
    InstagramComponent,
    LogoComponent,
    // Product
    ProductComponent,
    FiltersComponent,
    ProductBoxComponent,
    ProductBoxVerticalComponent,
    ProductsCollectionComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
    SidebarComponent,
    CategoriesComponent,
    QuickViewComponent,
    ModalCartComponent,
    NewProductComponent,
    SearchComponent,
    ProductCompareComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    ExitPopupComponent
  ]
})
export class ShopModule { }
