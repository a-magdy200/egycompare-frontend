import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/classes/user';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private loginForm: FormGroup;

  constructor(private authService: AuthService, private httpClient: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    // $.get('http://localhost:8000/apiget').done(console.log);
    const formData = {
      email: 'user@app.com',
      password: 'user',
    };
    const test = this.authService.login(formData.email, formData.password);
    console.log(test);
  }

  login (e: Event) {
    console.log('Logging in...');
    e.preventDefault();
    const {email, password} = this.loginForm.value;
    console.log(this.authService.login(email, password));
  }

}
