import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerUser(data) {
    return this.http.post('http://localhost:3000/user', data)
  }
}
