import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import {Product, StoreProduct, ProductFilter, BaseProduct, ProductColor} from '../../../../shared/classes/Product';
import { ProductsService } from '../../../../shared/services/products.service';
import * as $ from 'jquery';
import {BaseCategory, CategoryFilters, ProductCategory} from '../../../../shared/classes/category';
import {ProductsResponse} from '../../../../shared/classes/response';

@Component({
  selector: 'app-products-collection',
  templateUrl: './products-collection.component.html',
  styleUrls: ['./products-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [  // angular animation
    trigger('Animation', [
      transition('* => fadeOut', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ]),
      transition('* => fadeIn', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ])
    ])
  ]
})
export class ProductsCollectionComponent implements OnInit {

  public products     :   BaseProduct[] = [];
  public items        :   BaseProduct[] = [];
  public allItems     :   BaseProduct[] = [];
  public colorFilters :   ProductColor[] = [];
  public brandsFilters  :   any[] = [];
  public brands         :   any[] = [];
  public colors       :   any[] = [];
  public categories:   ProductCategory[] = [];
  public parentCategory: BaseCategory[] = [];
  public range: number[] = [];
  public filtersOptions: object = {};
  public filters: CategoryFilters[] = [];
  public sortByOrder  :   string = '';   // sorting
  public animation    :   any;   // Animation
  public isAllProducts: boolean = false;
  public currentPage: number = 1;
  public quickViewSlug: string = '';
  constructor(private route: ActivatedRoute, private router: Router,
              private productsService: ProductsService) {
    this.route.params.subscribe(params => {
      const category = params['category'];
      this.fetchProducts(category, this.currentPage);
    });
  }
  public openModal(slug: string) {
    console.log(slug);
    this.quickViewSlug = slug;
  }
  public closeModal(status: boolean) {
    this.quickViewSlug = '';
  }
  ngOnInit() {
    this.filters = [
      {
        name: 'Boost Clock',
        values: ['1700MHz', '2667MHz', '1770 MHz']
      },
      {
        name: 'Memory Size',
        values: ['8 GB', '16 GB', '11GB']
      },
      {
        name: 'Memory Type',
        values: ['GDDR6', 'DDR5', 'DDR4']
      }
    ];
    this.filters.map( (filter: CategoryFilters) => {
      filter.name = filter.name.replace(' ', '_');
    });
  }

  public fetchProducts(category: string, page: number) {
      this.productsService.getProductsByCategory(category, page).subscribe( (result: ProductsResponse) => {
        /*
        * /products - Should Return:
        * Products
        * Categories
        * Parent Categories
        * Brands
        * Category Filters
        *
        *product-id.json
        * /product/:id - should return: /ProductModel
        * Product (with stores, description)
        * Category & parent categories (name, id)
        * category filters_options
        *
        *
        *category-products.json
        * products/:category
        * subcategories
        * products ( without stores, description ) /ProductSModel
        * brands
        * parent categories
        * categoryFilters
        *
        *categories.json
        * /categories
        * categories (name, id, image)
        * level one subcategories
        *
        *brands.json
        * /brands
        * brands (name, id, image)
        *
        *
        *  */
        // result.categories;
        // result.brands;
        // result.products;
        // result.categoryFilters;
        this.parseProducts(result);
      });
  }
  public parseProducts(response: ProductsResponse) {
    console.log(response);
    this.allItems = response.products; // all products
    this.products = response.products.slice(0, 8);
    this.items = this.products;
    this.brands = response.brands;
    this.categories = response.categories;
    this.parentCategory = response.parent_categories;
    // From DB
  }
  // Animation Effect fadeIn
  public fadeIn() {
    this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
    this.animation = 'fadeOut';
  }


  // Initialize filter Items
  public filterItems(): BaseProduct[] {
    return this.items.filter((product: BaseProduct) => {
      let Colors = this.colorFilters.length === 0;
      this.colorFilters.map( color => {
        if (product.colors.indexOf(color) !== -1) {
         Colors = true;
         return;
        }
      });
      let Brands = this.brandsFilters.length === 0;
      this.brandsFilters.map( brand => {
        if (product.brand === brand) {
          Brands = true;
          return;
        }
      });
      const filterOptionsLength = Object.keys(this.filtersOptions).length;
      let FiltersOptions = filterOptionsLength === 0;
      if (!FiltersOptions) {
        const filterOptionsCheck = [];
        for (let key in this.filtersOptions) {
          if (this.filtersOptions.hasOwnProperty(key)) {
            const productFilterOptionValue = product.filter_options[key];
            filterOptionsCheck.push(this.filtersOptions[key].indexOf(productFilterOptionValue) !== -1 ? 1 : 0);
          }
        }
        FiltersOptions = filterOptionsCheck.reduce((previous, current) => previous + current) === filterOptionsLength;
      }
      return Colors && Brands && FiltersOptions; // return true
    });
  }
  updateFilters(filters: object) {
    const checkedFilters = {};
    for (let filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        if (filters[filter].length) {
          checkedFilters[filter] = filters[filter];
        }
      }
    }
    this.filtersOptions = checkedFilters;
    this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
  // Update tags filter
  public updateBrandFilters(brands: any[]) {
    this.brandsFilters = brands;
    this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Update color filter
  public updateColorFilters(colors: ProductColor[]) {
    this.colorFilters = colors;
    this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Update price filter
  public updatePriceFilters(price: any) {
    const items: any[] = [];
    this.products.filter((item: BaseProduct) => {
      if (item.minimumPrice >= price[0] && item.minimumPrice <= price[1] )  {
        items.push(item); // push in array
      }
    });
    this.items = items;
  }

  public twoCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-6');
    }
  }

  public threeCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-4');
    }
  }

  public fourCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-3');
    }
  }

  public sixCol() {
    if ($('.product-wrapper-grid').hasClass('list-view')) {} else {
      $('.product-wrapper-grid').children().children().children().removeClass();
      $('.product-wrapper-grid').children().children().children().addClass('col-lg-2');
    }
  }

  // For mobile filter view
  public mobileFilter() {
    $('.collection-filter').css('left', '-15px');
  }

  // Infinite scroll
  public onScroll() {
    if (this.isAllProducts) {

    }
    if (this.products.length < this.allItems.length) {
      const len = this.products.length;
      for (let i = len; i < len + 4; i++) {
        if (this.allItems[i] === undefined) {
          break;
        }
        this.products.push(this.allItems[i]);
      }
    }
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
    this.sortByOrder = val;
    this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

}
