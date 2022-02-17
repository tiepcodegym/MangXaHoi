import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StatusService} from "../services/status.service";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {
  userLogin: any;
  loading: any;
  posts: any;
  createForm: FormGroup | any
  statuses: any
  comments: any
  commentForm: FormGroup | any
  downloadURL: Observable<string> | undefined;
  constructor(private authService: AuthService,
              private router: Router,
              private postServive: PostService,
              private fb: FormBuilder,
              private statusService: StatusService,
              private storage: AngularFireStorage,
              private commentService: CommentService,
              ) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('user'));
    this.getPosts()
    this.getAllStatus()
    this.createForm = this.fb.group({
      content: [""],
      image: [""],
      status_id: [""],
      user_id: [this.userLogin.id],
    })

    this.commentForm = this.fb.group({
      content: [""],
      user_id: [""],
      post_id: [""]
    })
  }

  logout(){
    this.authService.logout().subscribe(res=>{
        localStorage.clear()
        this.router.navigate([""])
    })
  }

  getPosts() {
    this.postServive.getAll().subscribe(res => {
      this.posts = res
    })
  }


  create(){
    let data = this.createForm?.value
    this.postServive.create(data).subscribe(res => {
      this.posts.push(res)
      // this.router.navigate(["newfeed"])
      this.getPosts()
    })
  }
  getAllStatus() {
    this.statusService.getAll().subscribe(res => {
      this.statuses = res
    })
  }

  delete(id: number) {
    if (confirm('Are You Sure???')) {
      this.postServive.deletePost(id).subscribe(res=>{
        if (res.success == true) {
          this.getPosts();
        }
      })
    }
  }

  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    this.loading = this.storage.upload(filePath,file).percentageChanges()
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              console.log(url)
              this.createForm.get('image').setValue(url)
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
