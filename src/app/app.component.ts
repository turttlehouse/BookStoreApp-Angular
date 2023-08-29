import { Component } from "@angular/core";

//Adding a decorator called component.
//This component decorator add the metadata to tell angular what is the role of this AppComponent class
//This component also have some configuration inside the object we are defining :
//what is the selector,where is the templateUrl and styleUrls
@Component({
    selector:'app-root',
    templateUrl: 'app.component.html',  //creating the dedicated for template and style instead of using inline template and style.
    styleUrls : ['app.component.css'],           
})
export class AppComponent{}