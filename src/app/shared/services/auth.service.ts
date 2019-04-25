import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {RegisterUser} from '../classes/registerUser';
import {Observable} from 'rxjs';
import {User} from '../classes/user';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // Store authentication data
  private expiresAt: number;
  private userProfile: User;
  private accessToken: string;
  private authenticated: boolean;
  private readonly loginUrl: string;
  private readonly registerUrl: string;
  private readonly logoutUrl: string;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.loginUrl = 'http://127.0.0.1:8000/api/login';
    this.registerUrl = 'http://127.0.0.1:8000/api/register';
    this.logoutUrl = 'http://127.0.0.1:8000/api/logout';
    this.authenticated = false;
  }

  public login(email: string, password: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post(this.loginUrl, {email, password, remember_me: false})
      .subscribe(
        (success: User) => {
          console.log(success);
          const {accessToken, expiresIn} = success;
          this._setSession({accessToken, expiresIn}, success['profile']);
        },
        console.log
    );
    return this.authenticated;
  }
  public register(userInfo: RegisterUser) {
    this.httpClient.post(this.registerUrl, userInfo).subscribe(
      (success: User) => {
        console.log(success);
        const {accessToken, expiresIn} = success;
        this._setSession({accessToken, expiresIn}, success['profile']);
      },
      console.log
    );
    return this.authenticated;
  }

  public loginCheck() {
    return this.authenticated;
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getUserInfo() {
    return this.userProfile;
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

  logout() {
    this.httpClient.post(this.logoutUrl, {}).subscribe(
      success => {
        this.authenticated = false;
        this.userProfile = null;
        this.accessToken = null;
        this.expiresAt = null;
        // Redirect to Home.
        // this.router.navigate(['/']);
        },
      console.log
    );
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return Date.now() < this.expiresAt && this.authenticated;
  }

}
