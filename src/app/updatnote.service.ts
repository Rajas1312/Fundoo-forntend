import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatnoteService {

  constructor(private http: HttpClient) { }

  updateNotes(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put(environment.baseURL + 'notes' + '/' + localStorage.getItem('id'), data, { headers: reqHeader })
  }
}
