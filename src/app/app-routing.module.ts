import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";
import { ProfileUserComponent } from "./components/profile-user/profile-user.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'profile/:id', component: ProfileUserComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
