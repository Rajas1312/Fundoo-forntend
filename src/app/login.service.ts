import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data1: any

  constructor(private http: HttpClient) { }

  loginUser(data) {
    this.data1 = data
    return this.http.post(environment.baseURL + 'login', data)
  }
  loggedIn() {
    if (this.data1.email) {
      return true
    }
  }
}
