import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../../services/comment.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any
  id: any
  posts: any
  comments: any
  post_id: any
  commentForm: FormGroup | any

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private commentService: CommentService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getById(this.id);
    this.getPosts(this.id);
    this.getComments(this.id)
    let user = JSON.parse(<string>localStorage.getItem("user"))
    this.commentForm = this.fb.group({
      content: [""],
      user_id: [user.id],
      post_id: [""]
    })
  }

  private getById(id: number) {
    this.userService.getUser(id).subscribe(res=>{
        this.user = res
    })
  }

  private getComments(id: any) {
    this.commentService.getCommentById(id).subscribe(res => {
      this.comments = res
    })
  }

  submitComment(id: number) {
    let data = this.commentForm?.value
    data.post_id = id;
    this.commentService.comment(data).subscribe(res => {
      this.getComments(id)
    })
  }

  private getPosts(id: number){
    this.userService.getPostOfUser(id).subscribe(res=>{
      this.posts = res
    })
  }
}
