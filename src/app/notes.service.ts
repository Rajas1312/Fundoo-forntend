import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetnoteService {
  URL = environment.baseURL

  constructor(private http: HttpClient) { }

  deleteNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(localStorage.getItem('id'))
    return this.http.put(this.URL + 'notes' + '/' + 'delete' + '/' + localStorage.getItem('id'), { headers: reqHeader })
  }

  getNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(this.URL + 'notes', { headers: reqHeader })
  }

  addNote(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(this.URL + 'notes', data, { headers: reqHeader })
  }
  updateNotes(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put(this.URL + 'notes' + '/' + localStorage.getItem('id'), data, { headers: reqHeader })
  }

  archiveNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(localStorage.getItem('id'))
    return this.http.put(this.URL + 'notes' + '/' + 'archive' + '/' + localStorage.getItem('id'), { headers: reqHeader })
  }

  collaboratorNotes(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    localStorage.setItem('collaborator', data.collaboratorId[0])
    return this.http.put(this.URL + 'addcollaborator' + '/' + localStorage.getItem('id'), data, { headers: reqHeader })
  }

}
