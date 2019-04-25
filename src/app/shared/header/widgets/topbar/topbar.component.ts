import { Component, OnInit } from '@angular/core';
import { Product } from '../../../classes/Product';
import { WishlistService } from '../../../services/wishlist.service';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public productsService: ProductsService, private authService: AuthService) { }

  ngOnInit() {
  }
  loginCheck() {
    return this.authService.loginCheck();
  }

}
