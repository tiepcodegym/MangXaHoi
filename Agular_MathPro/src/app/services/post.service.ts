import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll():Observable<any>{
    return this.http.get(environment.api + "/posts", {headers: this.authService.setHeader()});
  }
  create(data: any): Observable<any>{
    return this.http.post(environment.api + "/posts", data, {headers: this.authService.setHeader()})
  }

  getPost(id:number):Observable<any>{
    return this.http.get(environment.api+'/posts/'+id)
  }

  update(data: any, id: number | undefined):Observable<any>{
    return this.http.put(environment.api+ '/posts/' +id ,data)
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete(environment.api+'/posts/'+id,{headers: this.authService.setHeader()})
  }

}
