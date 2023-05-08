import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  title:string = "List of Posts"
  messagePost:string = "Message Post"

  postParentMessage:string = "Message coming from the post parent"

  childMessage:string = "From Child Component"

  outputChildMessage:string = "Message from Child Component Via Output"


  @Input() fromParent:string;

  @Output() messageEvent = new EventEmitter<string>();

constructor() {
  this.fromParent = '';
}
sendMessage(){
  //console.log("Clicked");
  this.messageEvent.emit(this.outputChildMessage);
}




}
