import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  logIn(user: any) {
    if (user.username == 'test123' && user.password == 'test123') {
      return true;
    } else {
      return false;
    }

    //return this.http.post<any>('signin', user);
  }
}
