import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';



@Injectable({
providedIn: 'root'
})
export class LoginService{

    constructor(private http:HttpClient) { }


    Login(login_data)
    {
        var headers =new HttpHeaders();
        localStorage.setItem('currentUser', JSON.stringify(0));
        console.log(localStorage.getItem('currentUser'))
        return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git',login_data).pipe(map(user => {
            // login successful if there's a jwt token in the response
            //console.log("sffsfsd",user);
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
    }
}