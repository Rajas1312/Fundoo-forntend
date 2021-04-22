import { GetnoteService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { Note } from './collaborator.model';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  notes = new Note()
  email = localStorage.getItem('email')
  constructor(private service: GetnoteService) { }

  ngOnInit(): void {
  }
  submit() {
    this.service.collaboratorNotes(this.notes).subscribe(res => {
      console.log(res)
    }, err => {
      console.log("err")
    })
  }
}
