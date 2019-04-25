import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {HeaderCategories} from '../../shared/classes/category';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private categories: HeaderCategories[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getCategories().subscribe( (categories: HeaderCategories[]) => {
      this.categories = categories;
    });
  }

}
