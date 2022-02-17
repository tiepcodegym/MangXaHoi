import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getAll(): Observable<any> {
    return this.http.get(
      environment.api + "/statuses", {headers: this.authService.setHeader()}
    )
  }
}
