import { Injectable } from '@angular/core';
import { Book } from '../Interface/Book';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  //creating array of type Book which is our interface
  cart: Book[] =[];

  add(book:Book){     //this is the function that we use when click on AddtoCart
    // console.log(book);         
    this.cart.push(book);
  }

  get(){
    return this.cart;
  }

  remove(book:Book){
    this.cart = this.cart.filter(b=> b!=book);   //if we use pop it will remove the last one so finding the element of cart first using filtering method
  }
}
