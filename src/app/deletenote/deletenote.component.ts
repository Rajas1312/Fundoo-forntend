import { InterationService } from './../interation.service';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';



@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrls: ['./deletenote.component.css']
})
export class DeletenoteComponent implements OnInit {

  constructor(private service: InterationService, private service1: GetnoteService) { }

  ngOnInit(): void {
  }

  submit() {
    this.service1.deleteNotes().subscribe(res => {
      console.log(res)
      this.service.sendMessage("deleteNote")
      localStorage.removeItem('id')
    }, err => {
      console.log(err)
    })
  }
}
