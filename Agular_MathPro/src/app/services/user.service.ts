import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url='http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.api_url);
  }

  createUser(data: any):Observable<any>{
    return this.http.post(this.api_url+'/',data)
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.api_url+'/'+id)
  }

  getUser(id:number):Observable<any>{
    return this.http.get(this.api_url+'/'+id)
  }

  update(data: any, id: number | undefined):Observable<any>{
    return this.http.put(this.api_url+ '/' +id ,data)
  }

  getPostOfUser(id:number):Observable<any>{
    return this.http.get(this.api_url+'/'+id+'/with')
  }


}
