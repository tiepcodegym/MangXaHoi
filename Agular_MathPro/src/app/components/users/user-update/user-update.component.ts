import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {


  formUpdateUser: FormGroup | any
  id: any

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formUpdateUser = this.fb.group({
      email: [''],
      password: [''],
      fullname: [''],
      image: [''],
      address: [''],
      phone: [''],
      hobby: [''],
      birthday: [''],
      role: [''],
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res=>{
      console.log(res)
      // if (res.success == true){
      //   this.formUpdateUser?.patchValue({
      //     email: res.email,
      //     password: res.data.password,
      //     fullname: res.data.fullname,
      //     image: res.data.image,
      //     address: res.data.address,
      //     phone: res.data.phone,
      //     hobby: res.data.hobby,
      //     birthday: res.data.birthday,
      //     role: res.data.role,
      //   })
      this.formUpdateUser = this.fb.group({
        email: [res.email],
        password: [res.password],
        fullname: [res.fullname],
        image: [res.image],
        address: [res.address],
        phone: [res.phone],
        hobby: [res.hobby],
        birthday: [res.birthday],
        role: [res.role],
      });
      // }
    })
  }
  submit(){
    let data = this.formUpdateUser?.value;
    this.userService.update(data, this.id).subscribe(res=>{
      this.route.navigate(['users'])
    })
  }
}
