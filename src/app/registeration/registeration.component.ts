import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  register = new Register();
  message: any
  data: any
  success: any
  error: any
  constructor(
    private dataservice: RegisterService
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.dataservice.registerUser(this.register).subscribe(res => {
      console.log(res)
      this.data = res
      this.message = this.data.message
      this.success = this.data.Success
    })
  }

}
