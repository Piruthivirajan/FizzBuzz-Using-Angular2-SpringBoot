import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import {user} from './user';
import {Routes, RouterModule} from '@angular/router';
import {UserService } from './service/user.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
    providers:[
    UserService
  ]
})
export class RegisterComponent {
confirmpassword:string;
  router: Router;
 public ngForm: FormGroup; 
  private users:user[]=[];

constructor(private userservice:UserService,_router: Router){
  this.router=_router;
this.userservice.getPosts().subscribe(users => {
      this.users = users;
    } );
}
  register(value:any){

  this.userservice.createUser(value).subscribe(users => {
           //this.users[this.users.length]=users;
        this.router.navigateByUrl('/login'); 
    });
    }
}
