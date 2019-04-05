
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class OrderService{

constructor(private http:HttpClient) { }


getOrders()
{
//console.log("called 213!");
return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git').pipe(map(res=> res));
}



confirmOrder(order)
{
console.log(order);
return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git',order).pipe(map(res=> res));
}


GenBill(order)
{
console.log(order);
return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git',order).pipe(map(res=> res));

}



cancelOrd(id)
{
    //console.log(id);
    return this.http.delete('https://git.heroku.com/shrouded-refuge-34273.git'+id).pipe(map(res=>res));
}



}