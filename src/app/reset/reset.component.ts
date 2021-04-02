import { ResetService } from './../reset.service';
import { ResetPassword } from './reset.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  reset = new ResetPassword()

  constructor(private dataservice: ResetService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.resetUser(this.reset).subscribe(res => {
      console.log(res)

    })
  }

}
