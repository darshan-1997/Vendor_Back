import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators';



@Injectable({
providedIn: 'root'
})
export class BookerService{

constructor(private http:HttpClient) { }


addImage(itemImage)
{
const fd= new FormData();
var headers =new HttpHeaders();
fd.append('itemImage',itemImage,itemImage.name);
console.log("Image has been Uploaded");
return this.http.post('http://localhost:3000/services/addImage',fd,{headers:headers}).pipe(map(res=>res));
}

addService(newService){
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/services/addservice',newService,{headers:headers}).pipe(map(res=>res));

}

getMenu()
{
return this.http.get('http://localhost:3000/menucard/allmenu').pipe(map(res=> res));
}

getReq()
{
//console.log("called 213!");
return this.http.get('http://localhost:3000/services/allreq').pipe(map(res=> res));
}


getFeat()
{
console.log("called getfeat!");
return this.http.get('http://localhost:3000/services/getfeat').pipe(map(res=> res));
}


deleteService(id)
{
    console.log(id);
    return this.http.delete('http://localhost:3000/services/deleteService/'+id).pipe(map(res=>res));
}

update(data){
    
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/services/updateservice',data,{headers:headers}).pipe(map(res=>res));

}
updatefeat(data){
    console.log("update feat called")
    console.log(data);

    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/services/deleteFeat',data,{headers:headers}).pipe(map(res=>res));

}



}