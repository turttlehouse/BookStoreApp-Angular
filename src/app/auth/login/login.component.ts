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

  isLoading:boolean=false;


  constructor(){}

  ngOnInit(): void {}

  submit() {
      if (this.isLoading) return;
      this.isLoading = true;

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
        })
        .finally(()=>(this.isLoading=false));
        console.log(this.form);
  }
}