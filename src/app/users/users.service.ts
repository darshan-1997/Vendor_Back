import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Contact} from './contact';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getContacts()
  {
    return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git').pipe(map(res=> res));
  }
  
  addContacts(newUser)
  {
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git',newUser,{headers:headers}).pipe(map(res=> res));
  }
}
