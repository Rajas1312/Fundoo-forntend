import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  panelOpenState = true;

  onCloseClick() {
    this.panelOpenState = !this.panelOpenState
  }

  constructor() { }

  ngOnInit(): void {
  }

}
