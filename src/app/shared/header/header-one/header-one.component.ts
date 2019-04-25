import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/windows.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  public shoppingCartItems  :   CartItem[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {

  }

  openNav() {
  	this.fix.addNavFix();
  }

  // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      const header = $('#sticky');
      if (number >= header.height()) {
        header.addClass('fixed');
        $('body').css('margin-top', header.height() + 'px');
      } else {
        header.removeClass('fixed');
        $('body').css('margin-top', '0');
      }
  }

}
