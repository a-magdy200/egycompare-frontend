import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  // Initialize
  constructor(private http: HttpClient) { }

  // Instagram Array
  public getInstagramData() {
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOKEN&count=15');
  }

}
