import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [BooksComponent,BookComponent],
  imports: [CommonModule],
  providers:[BooksService],
  exports:[BooksComponent]   //child component(BookComponent) export nagarda ni vayo ?
})
export class BooksModule { }
