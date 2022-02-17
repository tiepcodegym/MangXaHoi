import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post.service";
import {UsersModule} from "../../users/users.module";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[] = [];

  constructor(private postServive: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postServive.getAll().subscribe(res => {
      this.posts = res

    })
  }

  deletePost(index: number) {
    if (confirm('Are you sure?')) {
      this.posts.splice(index,1)
    }
  }
}
