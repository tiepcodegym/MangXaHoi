
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostListComponent} from "./post-list/post-list.component";
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: ':id/detail',
    component: PostDetailComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: ':id/update',
    component: PostUpdateComponent
  }
];

@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent,
    PostUpdateComponent,
    PostDetailComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class PostsModule {
}

