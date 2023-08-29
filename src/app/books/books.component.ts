import { Component, OnInit } from '@angular/core';

interface Book{
  name:string
  author:string
  image:string
  amount:number
}



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

  //declaring array named Books and this array will be array of objects

  books:Book[] =[
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
    }
  ];
  
  
}


