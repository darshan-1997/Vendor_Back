
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class MenuService{

constructor(private http:HttpClient) { }


addImage(itemImage)
{
//console.log("abc"+itemImage+" "+itemImage.name);
const fd= new FormData();
var headers =new HttpHeaders();
fd.append('itemImage',itemImage,itemImage.name);
console.log("Image has been Uploaded");
return this.http.post('http://localhost:3000/menucard/addImage',fd,{headers:headers}).pipe(map(res=>res));
}

addContents(newItem){

    
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    console.log("new item");
    console.log(newItem);
    return this.http.post('http://localhost:3000/menucard/addItem',newItem,{headers:headers}).pipe(map(res=>res));

}

getMenu()
{
//console.log("called 213!");
return this.http.get('http://localhost:3000/menucard/allmenu').pipe(map(res=> res));
}


deleteItem(id)
{
    //console.log(id);
    return this.http.delete('http://localhost:3000/menucard/deleteItem/'+id).pipe(map(res=>res));
}

update(data){
    
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/menucard/update',data,{headers:headers}).pipe(map(res=>res));

}


wrapData()
{
//console.log("called 213!");
return this.http.get('http://localhost:3000/menucard/wrapmenu').pipe(map(res=> res));
}


}