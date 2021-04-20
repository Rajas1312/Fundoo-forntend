import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetnoteService {

  constructor(private http: HttpClient) { }

  getNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(environment.baseURL + 'notes', { headers: reqHeader })
  }

  addNote(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(environment.baseURL + 'notes', data, { headers: reqHeader })
  }
  updateNotes(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put(environment.baseURL + 'notes' + '/' + localStorage.getItem('id'), data, { headers: reqHeader })
  }
  deleteNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete(environment.baseURL + 'notes' + '/' + localStorage.getItem('id'), { headers: reqHeader })
  }
}
