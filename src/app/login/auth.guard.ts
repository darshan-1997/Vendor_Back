import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService} from './login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    x:string;
constructor(
private router: Router,
private authenticationService: LoginService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
//const currentUser = this.authenticationService.Login;
//localStorage.setItem('currentUser', JSON.stringify(0))
//console.log("12331",localStorage.getItem('currentUser'))
if (localStorage.getItem('currentUser')!=JSON.stringify(0)) {
// authorised so return true
console.log("afdfs");
return true;
}

// not logged in so redirect to login page with the return url
this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
return false;
}
}