import { InterationService } from './../interation.service';
import { Note } from './addnote.model';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  panelOpenState = false;
  notes = new Note()

  constructor(private service: InterationService, private service1: GetnoteService) { }

  ngOnInit(): void {

  }
  onCloseClick() {
    return this.panelOpenState = !this.panelOpenState

  }

  submit() {
    this.panelOpenState = !this.panelOpenState
    this.service1.addNote(this.notes).subscribe(res => {
      this.service.sendMessage("addedNote")
    }, err => {

    })
  }
}
