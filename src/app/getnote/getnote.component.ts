import { MatDialog } from '@angular/material/dialog';
import { GetnoteService } from './../getnote.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  public data: any
  arr: any
  id: any
  @Input() name: any

  constructor(private dataservice: GetnoteService, private dilouge: MatDialog) { }

  ngOnInit(): void {
    this.submit()
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
      localStorage.removeItem('id')
    })
  }

  onDeleteClick(data) {
    localStorage.setItem('id', data)
  }

}
