import { InterationService } from './../interation.service';
import { DeletenoteService } from './../deletenote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrls: ['./deletenote.component.css']
})
export class DeletenoteComponent implements OnInit {

  constructor(private dataservice: DeletenoteService, private service: InterationService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.deleteNotes().subscribe(res => {
      console.log(res)
      this.service.sendMessage("deleteNote")
      localStorage.removeItem('id')
    }, err => {
      console.log("err")
    })
  }
}
