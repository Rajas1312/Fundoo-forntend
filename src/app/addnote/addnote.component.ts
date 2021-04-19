import { InterationService } from './../interation.service';
import { GetnoteService } from './../getnote.service';
import { AddnoteService } from './../addnote.service';
import { Note } from './addnote.model';
import { Component, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  panelOpenState = false;
  notes = new Note()


  constructor(private dataservice: AddnoteService, private service: InterationService) { }

  ngOnInit(): void {

  }
  onCloseClick() {
    this.panelOpenState = !this.panelOpenState

  }

  submit() {
    this.panelOpenState = !this.panelOpenState
    this.dataservice.addNote(this.notes).subscribe(res => {
      console.log(res)
      this.service.sendMessage("addedNote")
    }, err => {
      console.log(err)
    })
  }

}
