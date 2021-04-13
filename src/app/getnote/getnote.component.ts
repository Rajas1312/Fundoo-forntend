import { GetnoteService } from './../getnote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  data: any
  title: any
  description: any


  constructor(private dataservice: GetnoteService) { }

  ngOnInit(): void {
    this.dataservice.getNotes().subscribe(res => {
      this.data = res;
      // this.title = this.data.data[0].title
      // this.description = this.data.data[0].description
      // console.log(this.data.data)
      // console.log(this.title)
      // console.log(this.description)
      for (let i = this.data.data.length - 1; i >= 0; i--) {
        this.title = this.data.data[i].title
        this.description = this.data.data[i].description
        console.log(this.title)
        console.log(this.description)
      }

    })
  }



}
