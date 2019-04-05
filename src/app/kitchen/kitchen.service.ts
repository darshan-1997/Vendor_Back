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
return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git/kitchen/confirmedorders').pipe(map(res=> res));
}

cancelOrd(id)
{
    //console.log(id);
    return this.http.delete('https://git.heroku.com/shrouded-refuge-34273.git/kitchen/cancelOrder/'+id).pipe(map(res=>res));
}


kitchenorder()
{
    return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git/kitchen/kitchenorders').pipe(map(res=> res));
}

}
