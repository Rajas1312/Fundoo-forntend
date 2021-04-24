
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetnoteService } from '../notes.service';


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
  trashClick = false
  notesclick = false
  archiveClick = false

  constructor(private dataservice: GetnoteService, private route: Router, private activatedroute: ActivatedRoute) { }

  onToolBarToggle() {
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

  onTrashClick() {
    this.trashClick = !this.trashClick
    if (this.trashClick == true) {
      this.route.navigate(['dashboard/trash']);
      return this.trashClick = false
    }
  }

  onNotesClick() {
    this.notesclick = !this.notesclick
    if (this.notesclick == true) {
      this.route.navigate(['dashboard/notes']);
      return this.notesclick = false
    }
  }

  onArchiveClick() {
    this.archiveClick = !this.archiveClick
    if (this.archiveClick == true) {
      this.route.navigate(['dashboard/archive']);
      return this.archiveClick = false
    }
  }
}
