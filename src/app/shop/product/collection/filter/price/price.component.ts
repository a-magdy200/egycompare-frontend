import {Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input} from '@angular/core';
import 'rxjs/add/observable/interval';
import {Product, StoreProduct} from '../../../../../shared/classes/product';
import {ProductsService} from '../../../../../shared/services/products.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {

  // Using Output EventEmitter
  @Output() priceFilters = new EventEmitter();

  // define min, max and range
  public min: number = 0;
  public max: number = 100;
  public _range: any[] = [0, 100];
  @Input() range: number[];
  constructor(private productsService: ProductsService) {
    console.log('min: ' + this.min);
    console.log('max: ' + this.max);
  }

  ngOnInit() {
  //   this.min = this.range[0];
  //   this.max = this.range[1];
  }
  // rangeChanged
  priceChanged(event: any) {
    setInterval(() => {
      this.priceFilters.emit(event);
    }, 1000);
  }

}
