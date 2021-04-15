import { AddnoteService } from './../addnote.service';
import { Note } from './addnote.model';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit, OnChanges {
  panelOpenState = false;
  notes = new Note()

  onCloseClick() {
    this.panelOpenState = !this.panelOpenState
  }

  constructor(private dataservice: AddnoteService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
  }

  submit() {
    this.panelOpenState = !this.panelOpenState
    this.dataservice.addNote(this.notes).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
    this.notes
  }
}
