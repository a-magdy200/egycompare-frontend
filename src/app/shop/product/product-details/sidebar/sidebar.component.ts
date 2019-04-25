import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../../../../shared/classes/category';

@Component({
  selector: 'product-details-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() categories: ProductCategory[] = [];
  constructor() { }

  ngOnInit() {
  }

}
