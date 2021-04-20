
import { Note } from './../addnote/addnote.model';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../getnote.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  notes = new Note()

  constructor(private service: GetnoteService) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.updateNotes(this.notes).subscribe(res => {
      console.log(res)
    }, err => {
      console.log("err")
    })
  }

}
