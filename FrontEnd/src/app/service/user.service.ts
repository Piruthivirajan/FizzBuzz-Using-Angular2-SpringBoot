import { Injectable } from '@angular/core'; 
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'; 

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class UserService { 
    private url:string="http://localhost:8888/users/";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
constructor(private http: Http) 
{ 
console.log('PostsService Initialized'); 
} 
getPosts() { 
return this.http.get(this.url).map(res => res.json()); 
}
createUser(value: any) {
 let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(value);
    return this.http.post('http://localhost:8888/users/', body, options).map(res => res.json()); 
  }
removeUser(id:number){
   let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
       
 return this.http.delete('http://localhost:8888/users/'+id,options).map((res:Response) => res.json()); 
 }  
updateUser(value: any){
 let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   let body = JSON.stringify(value);
 return this.http.post(this.url+value.id,body,options).map(res => res.json());

}}
