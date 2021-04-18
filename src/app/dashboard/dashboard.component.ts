import { GetnoteService } from './../getnote.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName = "rajas";
  isMenuOpen = false;
  contentMargin = 240
  data: any
  arr: any
  length: any

  constructor(private dataservice: GetnoteService) { }

  onToolBarToggle() {
    console.log(this.isMenuOpen)
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    } else {
      this.contentMargin = 240;
    }
  }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.getNotes().subscribe(res => {
      this.data = res
      this.arr = this.data.data
      this.arr = this.arr.reverse()
      this.length = this.arr.length
      return this.length

    })

  }

}
