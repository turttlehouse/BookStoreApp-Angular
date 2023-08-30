import { Component, OnInit } from '@angular/core';
import { Registerform } from 'src/app/Interface/Auth';
// import { AuthService } from '../auth.service';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  passwordMatched: boolean = true;

  isLoading:boolean=false;

  // constructor(private authService: AuthService) {}

  ngOnInit(): void {}

   submit(){
    if(this.isLoading)return;

    this.isLoading=true;
    if(this.form.password != this.form.confirm_password){
      this.passwordMatched =false;
      return;


    }
        const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>(this.isLoading=false));
    console.log(this.form);
    
   }

  // submit() {
  //   this.authService.register(this.form);
  // }

  // isLoading() {
  //   return this.authService.isLoading;
  // }
}