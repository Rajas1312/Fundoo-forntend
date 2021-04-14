import { GetnoteService } from './../getnote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  public data: any
  public arr = []
  title: any
  description: any

  constructor(private dataservice: GetnoteService) { }

  ngOnInit(): void {
    this.submit()
  }
  submit() {
    this.dataservice.getNotes().subscribe(res => {
      this.data = res
      this.arr = this.data.data
      console.log(this.arr.length)
    })
  }


}
