import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutUsComponent,
    ErrorPageComponent,
    LookbookComponent,
    SearchComponent,
    WishlistComponent,
    CartComponent,
    CollectionComponent,
    ForgetPasswordComponent,
    ContactComponent,
    CheckoutComponent,
    CompareComponent,
    OrderSuccessComponent,
    DashboardComponent,
    FaqComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
