import { RegisterService } from './../user.service';
import { ResetPassword } from './reset.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  reset = new ResetPassword()
  message: any
  data: any
  success: any
  error: any

  constructor(private dataservice: RegisterService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.resetUser(this.reset).subscribe(res => {
      this.data = res
      this.message = this.data.message
      this._snackBar.open(this.message, '', {
        duration: 3000
      })
    }, err => {
      this.error = err
      this.success = this.error.message
      this._snackBar.open(this.success, '', {
        duration: 3000
      })
    })
  }

}
