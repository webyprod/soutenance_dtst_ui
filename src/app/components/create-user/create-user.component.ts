import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  ngOnInit() {
  }

  form: FormGroup;
  fields = [
    { name: 'username', label: 'Username', type: 'text', validators: [Validators.required] },
    { name: 'password', label: 'Password', type: 'password', validators: [Validators.required] },
    { name: 'firstName', label: 'Prénom', type: 'text', validators: [Validators.required] },
    { name: 'lastName', label: 'Nom', type: 'text', validators: [Validators.required] },
    { name: 'age', label: 'Age', type: 'number', validators: [Validators.required] },
    { name: 'country', label: 'Pays', type: 'text', validators: [Validators.required] }
  ];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    const controlsConfig: any = {};
    this.fields.forEach(f => controlsConfig[f.name] = ['', f.validators]);
    this.form = this.fb.group(controlsConfig);
  }

  save(): void {
    if (this.form.valid) {
      this.userService.add(this.form.value).subscribe(() => this.router.navigate(['/users']));
    }
  }

}
