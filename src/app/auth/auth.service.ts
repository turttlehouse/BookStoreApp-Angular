import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Registerform, loginform } from '../Interface/Auth';


@Injectable({
  providedIn: 'root',
})




export class AuthService{
    isAuthenticated:boolean=false;
    isLoading:boolean=false;

    passwordMatched: boolean = true;


    login (form:loginform){

      if (this.isLoading) return;
      this.isLoading = true;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, form.email, form.password)
          .then((userCredential) => {
            // Signed in 

            this.isAuthenticated =true;

            // alert("login successfully");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            this.isAuthenticated=false;

            // alert("credentials doesnot match");
          })
          .finally(()=>(this.isLoading=false));
          alert("login succesful");
    }

    register(form:Registerform){

        if(this.isLoading)return;
        this.isLoading=true;
        if(form.password != form.confirm_password){
            this.passwordMatched =false;
          return;
    
        }  



        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
          .then((userCredential) => {
            // Signed in 
            this.isAuthenticated=true;

            // console.log(userCredential);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.isAuthenticated=false;


            // ..
          })
          .finally(()=>(this.isLoading=false));
          alert("form successfully submitted");

    }


    constructor(){}
}

