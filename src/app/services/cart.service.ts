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
}
