import { Component, OnInit } from '@angular/core';
import { loginform } from 'src/app/Interface/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



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

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((userCredential) => {
          // Signed in 
          alert("login successfully");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("credentials doesnot match");
        });
        console.log(this.form);
  }
}