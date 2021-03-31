import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassordService {

  constructor(private http: HttpClient) { }

  loginUser(data) {
    return this.http.post('http://localhost:3000/forgotPassword', data)
  }
}
