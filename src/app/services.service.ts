import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitType } from './Model/VIsitType';
import { Manager } from './Model/_Manager';
import { Visitor } from './Model/_Visitor';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  postManager(manager:Manager):Observable<any>{
    return this.http.post("https://localhost:44358/api/Manager", manager,{responseType:'json'});
  }
  postVisitType(type:VisitType):Observable<any>{
    return this.http.post("https://localhost:44358/api/VisitorType", type,{responseType:'json'});
  }
  getVisitorType():Observable<any>{
    return this.http.get("https://localhost:44358/api/VisitorType", {responseType:'json'});
  }
  postVisitor(id:any, visitor:Visitor):Observable<any>{
    return this.http.post("https://localhost:44358/api/Visitor/"+id,visitor,{responseType:'json'});
  }
  getManager():Observable<any>{
    return this.http.get("https://localhost:44358/api/Manager",{responseType:'json'});
  }
  getVisitor():Observable<any>{
    return this.http.get("https://localhost:44358/api/Visitor", {responseType:'json'});
  }
  getDataFromAPI():Observable<any>{
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2021-11-22&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98", {responseType:'json'});
  }
}
