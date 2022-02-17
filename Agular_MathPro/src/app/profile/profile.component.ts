import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userLogin: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('user'))
  }

  logout(){
    this.authService.logout().subscribe(res=>{
      if(res.message){
        localStorage.clear()
        this.router.navigate([""])
      }
    })
  }

}
