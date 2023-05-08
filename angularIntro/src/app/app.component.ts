import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angularIntro';
  parentMessage:string = 'Message come from the parent component';
  message:string = '';

  @ViewChild(PostComponent) childComp: PostComponent;

  constructor(){
    this.childComp = new PostComponent();
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage
  }

  receiveMessage(event: any) {
    console.log(event);
  }
  

  
}
