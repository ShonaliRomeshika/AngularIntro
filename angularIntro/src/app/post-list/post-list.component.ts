import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() fromPostParent:string;

constructor() {
  this.fromPostParent = '';
}

}
