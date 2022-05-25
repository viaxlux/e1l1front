import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private url="http://localhost:8080/api/user";
  private url = "/api/user/";
  constructor(private http: HttpClient) { }

  //traiga uno solo

  login(user: any): Observable<any> {
    return this.http.post(this.url+"login", user);
  }
}
