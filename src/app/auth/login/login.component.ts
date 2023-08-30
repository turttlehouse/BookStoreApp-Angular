import { Component, OnInit } from '@angular/core';
import { loginform } from 'src/app/Interface/Auth';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  form: loginform = {
    email: '',
    password: '',
  };



  constructor(private authservice:AuthService){}

  ngOnInit(): void {}

  submit() {
      
      this.authservice.login(this.form);
  }

  isLoading() {
    return this.authservice.isLoading;
  }
}