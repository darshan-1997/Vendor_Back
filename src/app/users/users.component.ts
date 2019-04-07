import { Component, OnInit, Input } from '@angular/core';
import { User } from './users';
import { Key } from 'protractor';
import { UserService } from './users.service';
import { Router} from '@angular/router';
@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.css'],
providers:[UserService]
})

//export var contacts : Contact[];
export class UsersComponent implements OnInit {

@Input() users:User[];

constructor(private UserService: UserService, private router:Router) { 
    
}

ngOnInit() {
//console.log("fkdbshf");
this.UserService.getContacts().subscribe((users)=>{

this.users=Object.values(users);
console.log(users);
});
}

logout()
{
  console.log("logout");
  localStorage.setItem('currentUser', JSON.stringify(0))
  this.router.navigate(['/login']);
}


}