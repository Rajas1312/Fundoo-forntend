import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletenoteService {

  constructor(private http: HttpClient) { }

  deleteNotes() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete(environment.updateNote + '/' + localStorage.getItem('id'), { headers: reqHeader })
  }
}
