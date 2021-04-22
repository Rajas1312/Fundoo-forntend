import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';

@Component({
  selector: 'app-is-archived',
  templateUrl: './is-archived.component.html',
  styleUrls: ['./is-archived.component.scss']
})
export class IsArchivedComponent implements OnInit {

  public data: any
  arr: any

  constructor(private dataservice: GetnoteService) { }

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
}
