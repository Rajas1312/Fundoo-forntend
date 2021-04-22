import { CollaboratorComponent } from './../collaborator/collaborator.component';
import { InterationService } from './../interation.service';
import { Component, OnInit } from '@angular/core';
import { GetnoteService } from '../notes.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private dilouge: MatDialog) { }

  ngOnInit(): void {
  }

}
