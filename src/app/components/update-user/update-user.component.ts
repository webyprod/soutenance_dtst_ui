import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup;
  fields = [
    { name: 'username', label: 'Username', type: 'text', validators: [Validators.required] },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'firstName', label: 'Prénom', type: 'text', validators: [Validators.required] },
    { name: 'lastName', label: 'Nom', type: 'text', validators: [Validators.required] },
    { name: 'age', label: 'Age', type: 'number', validators: [Validators.required] },
    { name: 'country', label: 'Pays', type: 'text', validators: [Validators.required] }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const controlsConfig: any = {};
    this.fields.forEach(f => controlsConfig[f.name] = ['', f.validators || []]);
    this.form = this.fb.group(controlsConfig);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getById(id).subscribe(user => {
      this.form.patchValue(user);
    });
  }

  update(): void {
    if (this.form.valid) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const user = { ...this.form.value, id };
      this.userService.update(user).subscribe(() => this.router.navigate(['/users']));
    }
  }

}
