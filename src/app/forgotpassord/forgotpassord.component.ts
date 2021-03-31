import { ForgotPassword } from './forgotpassord.model';
import { ForgotpassordService } from './../forgotpassord.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassord',
  templateUrl: './forgotpassord.component.html',
  styleUrls: ['./forgotpassord.component.css']
})
export class ForgotpassordComponent implements OnInit {

  forgot = new ForgotPassword
  constructor(
    private dataservice: ForgotpassordService
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.dataservice.loginUser(this.forgot).subscribe(res => {
      console.log(res)

    })
  }
}
