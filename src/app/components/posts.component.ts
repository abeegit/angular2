import { Component } from '@angular/core';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'posts',
  template: `<h1>Posts</h1>
    <div *ngIf="showPosts">
      <ul>
        <li *ngFor="let post of posts">
          <p><a href="/post/{{ post.id }}">{{ post.id }}</a></p>
          <p>{{ post.title }}</p>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>`,
  providers: [ PostsService ]
})

export class PostsComponent {
  posts: Array<post>;
  showPosts: boolean;

  constructor(private postsService: PostsService) {
    this.showPosts = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.showPosts = true;
    }, error => {
      console.log(error);
    });
  }
}

interface post {
  id: number,
  userId: number,
  title: string,
  body: string
}