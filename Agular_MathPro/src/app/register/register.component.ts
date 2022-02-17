import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formAddUser?: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({

      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    let data = this.formAddUser?.value;
    this.userService.createUser(data).subscribe(res => {
      if (res.success == true) {
        this.router.navigate([''])
        this.toastr.success('Oki Bro', 'Tạo tài khoản thành công')
        this.toastr.success('Oki Bro', 'Tạo tài khoản thành công')
      }
    })
  }

  get fullname() {
    return this.formAddUser?.get('fullname')
  }

  get email() {
    return this.formAddUser?.get('email')
  }

  get password() {
    return this.formAddUser?.get('password')
  }
}
