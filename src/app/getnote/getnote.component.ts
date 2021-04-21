import { InterationService } from './../interation.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { GetnoteService } from '../notes.service';


@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  public data: any
  arr: any
  id: any

  constructor(private dataservice: GetnoteService, private dilouge: MatDialog, private service: InterationService) {
    this.submit()
    this.addNote()
  }

  ngOnInit(): void {

  }
  submit() {
    this.dataservice.getNotes().subscribe(res => {
      this.data = res
      this.arr = this.data.data
      this.arr = this.arr.reverse()

    })

  }

  onClick(data) {
    let dilougeRef = this.dilouge.open(UpdatenoteComponent, {
      height: '170px',
      width: '400px',
    })
    localStorage.setItem('id', data)
    dilougeRef.afterClosed().subscribe(res => {
      console.log(res)
      this.submit()
      localStorage.removeItem('id')
    })
  }

  onDeleteClick(data) {
    localStorage.setItem('id', data)
  }

  addNote() {
    this.service.add$.subscribe(message => {
      this.submit()
    })
  }
  deleteNote() {
    this.service.add$.subscribe(message => {
      this.submit()
    })
  }

}
