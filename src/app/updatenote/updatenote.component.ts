import { UpdatnoteService } from './../updatnote.service';
import { Note } from './../addnote/addnote.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  notes = new Note()

  constructor(private datasevice: UpdatnoteService) { }

  ngOnInit(): void {
  }

  submit() {
    this.datasevice.updateNotes(this.notes).subscribe(res => {
      console.log(res)
    }, err => {
      console.log("err")
    })
  }

}
