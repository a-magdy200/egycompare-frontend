import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorsFilter } from '../../../../../shared/classes/Product';
import * as $ from 'jquery';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  public activeItems: any[] = [];

  // Using Input and Output EventEmitter
  @Output() colorFilters:  EventEmitter<any[]> = new EventEmitter();

  public colors = ColorsFilter;
  constructor() { }

  ngOnInit() {  }

  /*
  * products
  * categories
  * price range (min max)
  * category filters
  * */
  // Click to call function
  public changeColor(e: any) {
    const element = $(e.target);
    const colors = [];
    element.toggleClass('active');
    const activeItems = element.parent().children('.active');
    activeItems.map( elementIndex => {
      colors.push(activeItems[elementIndex].getAttribute('data-color'));
    });
    this.activeItems = colors;
    this.colorFilters.emit(this.activeItems);
  }

}
