import { MatSnackBar } from '@angular/material/snack-bar';
import { InterationService } from './../interation.service';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';



@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrls: ['./deletenote.component.scss']
})
export class DeletenoteComponent implements OnInit {

  constructor(private service: InterationService, private service1: GetnoteService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    this.service1.deleteNotes().subscribe(res => {
      console.log(res)
      this._snackBar.open('Note Deleted Sucessfully', '', {
        duration: 2000
      })
      this.service.sendMessage("deleteNote")
      localStorage.removeItem('id')
    }, err => {
      console.log(err)
    })
  }
}
