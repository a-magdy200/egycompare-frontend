import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './left-menu-items';
import { LandingFixService } from '../../../services/landing-fix.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  
  public menuItems: Menu[];

  constructor(private fix: LandingFixService) { }

  ngOnInit() { 
     this.menuItems = MENUITEMS.filter(menuItem => menuItem);
  }

  closeNav() {
  	 this.fix.removeNavFix();
  }

}
