import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe(data => this.users = data);
  }

  updateUser(id: number): void {
    this.router.navigate(['/update-user', id]);
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }

  createUser(): void {
    this.router.navigate(['/create-user']);
  }

}
