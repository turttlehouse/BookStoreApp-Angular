import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';




//To make a normal JS class as a module we have to add this decorator.
//Decorator adds some METADATA INFORMATION to this class. It means this decorator tells to the Angular what is the role of this AppModule.

//This decorator has some objects inside and inside this obj we same some information which are
//(declarations,imports,providers,Bootstrap)
@NgModule({
    declarations: [AppComponent, BooksComponent],
    imports:[BrowserModule],       //After adding template in component decorator we need to import BrowserModule to have all the browser related information for the angular
    bootstrap:[AppComponent]
//Bootstrap is one of the most important thing for the root module which is the bootstrap component which is the first ever component to load 
})
export class AppModule{}