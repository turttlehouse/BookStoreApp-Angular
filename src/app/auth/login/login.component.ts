import { Component, OnInit } from '@angular/core';
import { loginform } from 'src/app/Interface/Auth';


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

  constructor(){}

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
  }
}