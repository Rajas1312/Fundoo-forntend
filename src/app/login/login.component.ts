import { LoginService } from './../login.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private dataservice: LoginService
  ) {

  }

  ngOnInit(): void {
  }
  submit() {
    this.dataservice.loginUser(this.login).subscribe(res => {
      console.log(res)

    })
  }

}
