import { MatSnackBar } from '@angular/material/snack-bar';
import { InterationService } from './../interation.service';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {

  constructor(private service1: GetnoteService, private service: InterationService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  submit() {
    this.service1.archiveNotes().subscribe(res => {
      this._snackBar.open('Note Archived Sucessfully', '', {
        duration: 2000
      })
      this.service.sendMessage("deleteNote")
      localStorage.removeItem('id')
    }, err => {
      this._snackBar.open('', 'Notes were not Archived', {
        duration: 2000
      })
    })
  }
}
