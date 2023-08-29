import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Book } from 'src/app/Interface/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book :Book ={}as Book  //passing data from parent to child using input decorator
  @Output() bookemittor = new EventEmitter<Book>() //passing data from child to parent   //our data type is interface which is defining the type of our book information

  constructor(private cartservice:CartService){}
    
    // addtocart(){
    //     this.bookemittor.emit(this.book)
    // }

    addtocart(){
      this.cartservice.add(this.book);
    }



}


