import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCommentById(id: any): Observable<any> {
    return this.http.get(
      environment.api + "/comments/" + id, {headers: this.authService.setHeader()}
    )
  }

  getAll():Observable<any>{
    return this.http.get(environment.api + "/comments", {headers: this.authService.setHeader()});
  }

  comment(data: any): Observable<any> {
    return this.http.post(
      environment.api + "/comments", data, {headers: this.authService.setHeader()}
    )
  }
}
