import { MatDialog } from '@angular/material/dialog';
import { GetnoteService } from './../getnote.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit, OnChanges {
  public data: any
  public arr: any
  title: any
  description: any

  constructor(private dataservice: GetnoteService, private dilouge: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.submit()
  }

  submit() {
    this.dataservice.getNotes().subscribe(res => {
      this.data = res
      this.arr = this.data.data
      this.arr = this.arr.reverse()
      console.log(this.arr.title)
    })

  }

  onClick() {
    let dilougeRef = this.dilouge.open(UpdatenoteComponent, {
      height: '170px',
      width: '400px',
    })
    dilougeRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

}
