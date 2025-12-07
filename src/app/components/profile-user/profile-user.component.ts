import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.findById(id).subscribe({
      next: (data) => this.user = data,
      error: () => console.error('Utilisateur non trouvé')
    });
  }

}
