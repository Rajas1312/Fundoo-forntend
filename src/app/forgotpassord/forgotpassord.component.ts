import { MatSnackBar } from '@angular/material/snack-bar';
import { ForgotPassword } from './forgotpassord.model';
import { ForgotpassordService } from './../forgotpassord.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgotpassord',
  templateUrl: './forgotpassord.component.html',
  styleUrls: ['./forgotpassord.component.css']
})
export class ForgotpassordComponent implements OnInit {

  forgot = new ForgotPassword()
  data: any
  token: any
  constructor(
    private dataservice: ForgotpassordService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.dataservice.loginUser(this.forgot).subscribe(res => {
      //console.log(res)
      this.data = res
      this.token = this.data.token
      console.log(this.token)
      this._snackBar.open('Email Sent Sucessfully!', '', {
        duration: 2000
      })

    }, err => {
      this._snackBar.open('Invalid Email', '', {
        duration: 3000
      })
    })
  }
}
