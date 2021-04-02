import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }
  resetUser(data) {
    return this.http.post('http://localhost:3000/resetPassword', data)
  }
}
