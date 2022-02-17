import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  formUpdatePost?: FormGroup;
  id?: number;

  constructor(private fb: FormBuilder,
              private postServive: PostService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formUpdatePost = this.fb.group({
      content: [''],
      image: [''],
      status_id: ['']
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.postServive.getPost(this.id).subscribe(res=>{
        this.formUpdatePost?.patchValue({
          content: res.content,
          image: res.image,
          status_id: res.status_id
        })
    })
  }

  submit(){
    let data = this.formUpdatePost?.value;
    this.postServive.update(data,this.id).subscribe(res=>{
      this.route.navigate(['newfeed'])
    })
  }

}
