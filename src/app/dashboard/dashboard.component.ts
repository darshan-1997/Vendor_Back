import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../main-nav/main-nav.component.css']

})
export class dashboard {

  constructor(private router:Router){}
  logout()
  {
    console.log("logout");
    localStorage.setItem('currentUser', JSON.stringify(0))
    this.router.navigate(['/login']);
  }
    
  }
