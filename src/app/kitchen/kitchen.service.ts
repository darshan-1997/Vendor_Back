import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class KitchenService{

constructor(private http:HttpClient) { }


getConfOrders()
{
//console.log("called 213!");
return this.http.get('http://localhost:3000/kitchen/confirmedorders').pipe(map(res=> res));
}

cancelOrd(id)
{
    //console.log(id);
    return this.http.delete('http://localhost:3000/kitchen/cancelOrder/'+id).pipe(map(res=>res));
}


kitchenorder()
{
    return this.http.get('http://localhost:3000/kitchen/kitchenorders').pipe(map(res=> res));
}

}