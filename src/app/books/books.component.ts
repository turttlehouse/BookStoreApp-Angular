import { Component, OnInit } from '@angular/core';
import { Book } from '../Interface/Book';
import { BooksService } from './books.service';





@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

  //declaring array named Books and this array will be array of objects

  constructor(private bookService:BooksService){
    this.books = this.bookService.getbooks();
  }

  books:Book[] =[];
  

  
  addtocart(event:any){
    console.log(event);
  }
}


