
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MasterComponent} from "./master/master.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NewfeedComponent} from "./newfeed/newfeed.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth.guard";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'users',
        component: MasterComponent,
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
      },
      {

        path: 'posts',
        component: MasterComponent,
        loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'newfeed',
        component: NewfeedComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'master',
        component: MasterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

