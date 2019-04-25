import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CategoryFilters} from '../../../../../shared/classes/category';
declare var $: any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  // Using Input nad Output EventEmitter
  @Input()  categoryFilters : CategoryFilters[];
  @Output() selectedCategoryFilters  : EventEmitter<object> = new EventEmitter();

  // Array
  public checkedFiltersArray: any[] = [];
  public checkedFiltersObject: object = {};

  constructor() { }

  ngOnInit() {
    this.selectedCategoryFilters.emit(this.checkedFiltersArray);   // Pass value Using emit
    $('.collapse-block-title-filters').on('click', function(e) {
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
  }

  // value checked call this function
  checkedFilter(event) {
    /*const index = this.checkedFiltersArray.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked) {
      this.checkedFiltersArray.push(event.target.value); // push in array cheked value
    } else {
      this.checkedFiltersArray.splice(index, 1); // removed in array unchecked value
    }
    this.selectedCategoryFilters.emit(this.checkedFiltersArray);*/
    const target = event.target,
          filterVal = target.value,
          filterName = target.getAttribute('data-target');
    let currenTFilterChange = this.checkedFiltersObject[filterName];
    if (currenTFilterChange) {
      const valueIndex = currenTFilterChange.indexOf(filterVal);
      if (valueIndex === -1) {
        currenTFilterChange.push(filterVal);
      } else {
        currenTFilterChange.splice(valueIndex, 1);
      }
    } else {
      currenTFilterChange = [filterVal];
    }
    this.checkedFiltersObject[filterName] = currenTFilterChange;
    this.selectedCategoryFilters.emit(this.checkedFiltersObject);
  }



}
