import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post(environment.api + "/auth/login",data);
  }

  setHeader() {
    let token = localStorage.getItem("token");
    return new HttpHeaders().set('Authorization', "Bearer " + token)
  }

  logout(): Observable<any>{
    return this.http.post(environment.api + "/auth/logout",null,{headers: this.setHeader()});
  }
}
