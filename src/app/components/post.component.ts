import { Component, Input } from '@angular/core';
import { PostsService } from './../services/posts.service';

@Component({
  selector: "about",
  template: `<h1>{{ post }}</h1>`,
  providers: [ PostsService ]
})

export class PostComponent {
  @Input() id: number;
  post: post;

  constructor(private postsService: PostsService) {
    console.log(this.id);
    this.postsService.getPost(this.id).subscribe(post => console.log(post));
  }
}

interface post {
  id: number,
  userId: number,
  body: string,
  title: string
}