import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../shared/classes/Product';
import { ProductsService } from '../../../../shared/services/products.service';
declare var $: any;

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnInit, OnDestroy {

  public products : Product[] = [];
  public relatedProducts : Product[] = [];

  constructor(private productsService: ProductsService,) { }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => {
  		this.products = product;
  	});
  }

  ngOnDestroy() {
    $('.addTocartModal').modal('hide');
  }

}
