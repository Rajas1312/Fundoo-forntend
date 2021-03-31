import { LoginService } from './../login.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-posts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
