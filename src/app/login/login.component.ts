import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../login.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-posts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  })

  login = new Login()

  constructor(
    private dataservice: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.dataservice.loginUser(this.login).subscribe(res => {
      this.router.navigate(['dashboard'])
    }, error => {
      this._snackBar.open('invalid cerdentials!', '', {
        duration: 3000
      })
    })
  }

}
