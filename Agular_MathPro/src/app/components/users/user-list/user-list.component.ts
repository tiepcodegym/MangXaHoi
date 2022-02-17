import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  private res: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res.data
    })
  }

  delete(id: number) {
    if (confirm('Are You Sure???')) {
      this.userService.deleteUser(id).subscribe(res=>{
          this.getUsers();
      })
    }
  }
}
