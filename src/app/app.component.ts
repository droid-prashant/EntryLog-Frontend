import { Component } from '@angular/core';
import { VisitType } from './Model/VIsitType';
import { Manager } from './Model/_Manager';
import { ServicesService } from './services.service';
import * as moment from 'moment';
import { Visitor } from './Model/_Visitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisitorLog';
  date: any;
  id: any;
  visitType: any;
  managerList: any;
  visitorList: any;
  news:any[] =[];
  constructor(private service: ServicesService) { }
  manager: Manager = new Manager();
  visitor:Visitor=new Visitor();
  type:VisitType= new VisitType();
  ngOnInit(): void {
    this.viewManager();
    this.viewVisitor();
  }
  
viewManager(){
  this.service.getManager().subscribe(
    res=>{
      this.managerList=res.$values;
      console.log(this.manager);
    }
  );
}
viewVisitor(){
  this.service.getVisitor().subscribe(
    res=>{
      this.visitorList=res;
    }
  );
}
AddManager() {
  this.service.postManager(this.manager).subscribe(
    res => {
      alert("Added Successfully");
    }
  );
}

public GetdataFromAPI(){
    this.service.getDataFromAPI().subscribe(
      res =>{
        if(res.status.toLowerCase() == "ok"){
          console.log(res);
          this.news = res.articles;
          this.news = this.news.sort((a,b) =>
          b.publishedAt - a.publishedAt
          );
            
        }else{
          console.log(res);
        }
    }
    )
}
}

