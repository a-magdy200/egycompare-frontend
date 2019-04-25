import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {BaseCategory, ProductCategory} from '../../../../shared/classes/category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: ProductCategory[];
  @Input() parentCategory: BaseCategory[];
  public parentCategoriesStyle: any;
  private isSingleProduct: boolean = false;
  constructor(private route: ActivatedRoute) { }

  // collapse toggle
  ngOnInit() {
    $('.collapse-block-title').on('click', function(e) {
        e.preventDefault();
        const speed = 300;
        const thisItem = $(this).parent(),
          nextLevel = $(this).next('.collection-collapse-block-content');
        if (thisItem.hasClass('open')) {
          thisItem.removeClass('open');
          nextLevel.slideUp(speed);
        } else {
          thisItem.addClass('open');
          nextLevel.slideDown(speed);
        }
    });
    if (this.parentCategory) {
      this.parentCategoriesStyle = this.isString() ? '-10px 0px 0px 10px' : '-10px 0px 0px ' + this.parentCategory.length * 3 + 'px';
    }
    this.route.params.subscribe( params => {
      if (!params['category']) {
        this.isSingleProduct = true;
      }
    });
  }

  isString() {
    return this.parentCategory.length === 1;
  }
  isParentArray() {
    return this.parentCategory.length > 1;
  }
  // For mobile view
  public mobileFilterBack() {
     $('.collection-filter').css('left', '-365px');
  }

}
