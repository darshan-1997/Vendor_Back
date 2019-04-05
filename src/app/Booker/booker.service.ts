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
return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git/services/addImage',fd,{headers:headers}).pipe(map(res=>res));
}

addService(newService){
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git/services/addservice',newService,{headers:headers}).pipe(map(res=>res));

}

getMenu()
{
return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git/menucard/allmenu').pipe(map(res=> res));
}

getReq()
{
//console.log("called 213!");
return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git/services/allreq').pipe(map(res=> res));
}


getFeat()
{
console.log("called getfeat!");
return this.http.get('https://git.heroku.com/shrouded-refuge-34273.git/services/getfeat').pipe(map(res=> res));
}


deleteService(id)
{
    console.log(id);
    return this.http.delete('https://git.heroku.com/shrouded-refuge-34273.git/services/deleteService/'+id).pipe(map(res=>res));
}

update(data){
    
    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git/updateservice',data,{headers:headers}).pipe(map(res=>res));

}
updatefeat(data){
    console.log("update feat called")
    console.log(data);

    var headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('https://git.heroku.com/shrouded-refuge-34273.git/services/deleteFeat',data,{headers:headers}).pipe(map(res=>res));

}



}
