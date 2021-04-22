import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  data1: any

  constructor(private http: HttpClient) { }
  registerUser(data) {
    return this.http.post(environment.baseURL + 'user', data)
  }
  loginUser(data) {
    this.data1 = data
    localStorage.setItem('email', this.data1.email)
    return this.http.post(environment.baseURL + 'login', data)
  }
  loggedIn() {
    if (this.data1.email) {
      return true
    }
  }
  userForgotPasssword(data) {
    return this.http.post(environment.baseURL + 'forgotPassword', data)
  }

  resetUser(data) {
    return this.http.post(environment.baseURL + 'resetPassword', data)
  }

}
