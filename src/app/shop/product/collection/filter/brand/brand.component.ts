import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Brand} from '../../../../../shared/classes/brand';
declare var $: any;

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  // Using Input nad Output EventEmitter
  @Input()  brandsFilters : Brand[];
  @Output() brandFilters  : EventEmitter<Brand[]> = new EventEmitter<Brand[]>();

  // Array
  public checkedTagsArray: any[] = [];

  constructor() { }

  ngOnInit() {
    this.brandFilters.emit(this.checkedTagsArray);   // Pass value Using emit
      $('.brands-filter-block').on('click', function(e) {
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
      const index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
       if (event.target.checked) {
         this.checkedTagsArray.push(event.target.value); // push in array cheked value
       } else {
         this.checkedTagsArray.splice(index, 1); // removed in array unchecked value
       }
       this.brandFilters.emit(this.checkedTagsArray);
  }
}
