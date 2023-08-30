import { Component, OnInit } from '@angular/core';
import { Registerform } from 'src/app/Interface/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  form:Registerform= {
    email: '',
    password: '',
    confirm_password: '',
  };

 
   constructor(private authservice:AuthService) {}

  ngOnInit(): void {}

   submit(){

    this.authservice.register(this.form);
   
   }

   isLoading(){
    return this.authservice.isLoading;
   }


}