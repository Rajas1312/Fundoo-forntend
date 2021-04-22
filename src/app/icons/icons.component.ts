import { InterationService } from './../interation.service';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
