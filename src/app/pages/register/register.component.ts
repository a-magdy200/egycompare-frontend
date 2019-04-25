import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../shared/classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeat_password: new FormControl(),
      gender: new FormControl('male'),
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value);
    const reg = this.authService.register(this.registerForm.value);
    console.log(reg);
  }
}
