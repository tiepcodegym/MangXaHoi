import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin?: FormGroup
  errLogin?: string

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(){
    let data = this.formLogin?.value;
    this.authService.login(data).subscribe(res=>{
      if(res.error){
        this.errLogin = res.message
      }else {
        let token = res.access_token
        localStorage.setItem("token",token)
        localStorage.setItem("user",JSON.stringify(res.user))
        this.router.navigate(['newfeed'])
        this.toastr.success('Ủa Alo', 'Đăng nhập thành công')
      }
    })
  }
  get email() {
    return this.formLogin?.get('email')
  }
  get password() {
    return this.formLogin?.get('password')
  }

}
