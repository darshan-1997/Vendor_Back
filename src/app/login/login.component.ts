import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    constructor(private LoginService: LoginService,private router: Router){}

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        });

    //itemName="abc";
        
      

    submit() {


        //console.log(this.form);
        const newItem={
            username: this.form.value.username,
            password:this.form.value.password
        }

            //console.log(newItem.itemName);
     

            this.LoginService.Login(newItem).subscribe(data=>{
                //this.Foods.push(newFood);
               // alert("Your Image Added Successfully");
                 console.log(data);
                 if(data)
                 {
                    this.router.navigate(['/main-nav']);
                 }
              });



        }
        
    
    }
