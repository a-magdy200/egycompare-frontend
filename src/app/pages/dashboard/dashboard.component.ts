import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private readonly userInfo: User;
  constructor(private authService: AuthService) {
    this.userInfo = this.authService.getUserInfo();
  }

  ngOnInit() {
  }

}
