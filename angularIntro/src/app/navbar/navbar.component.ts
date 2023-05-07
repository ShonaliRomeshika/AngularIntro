import { Component } from "@angular/core";

//component decorator
@Component({
    
    selector: 'app-navbar',
    /*
    template:'<h1> Navbar Component </h1>',
    //styles: ['h1{color: red}']
    
    //to write multiple styling lines
    styles: [`h1{
            color: red;
            font-size: 50px;
    }`]
    */

    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']

}
)


export class NavbarComponent{

}