
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
return this.http.get('http://localhost:3000/orders/pendingorders').pipe(map(res=> res));
}



confirmOrder(order)
{
console.log(order);
return this.http.post('http://localhost:3000/orders/confirmorder',order).pipe(map(res=> res));
}


GenBill(order)
{
console.log(order);
return this.http.post('http://localhost:3000/orders/GenBill',order).pipe(map(res=> res));

}



cancelOrd(id)
{
    //console.log(id);
    return this.http.delete('http://localhost:3000/orders/cancelVendor/'+id).pipe(map(res=>res));
}



}