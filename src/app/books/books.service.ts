import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getbooks(){
   return [
      {
        name:'Moonshiners',
        author:'Rajnish',
        image:'https://m.media-amazon.com/images/I/41vt+u8zb4L._SX332_BO1,204,203,200_.jpg',
        amount:500
  
      },
  
      {  
        name:'All the forgiveness',
        author: 'Jimee',
        image:'https://m.media-amazon.com/images/I/41v96Uki0uL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount:1000
      },
      {
        name:'Moonshiners',
        author:'Rajnish',
        image:'https://m.media-amazon.com/images/I/41vt+u8zb4L._SX332_BO1,204,203,200_.jpg',
        amount:500
  
      },
      {
        name:'Moonshiners',
        author:'Rajnish',
        image:'https://m.media-amazon.com/images/I/41vt+u8zb4L._SX332_BO1,204,203,200_.jpg',
        amount:500
  
      },
    ];
  }
}
