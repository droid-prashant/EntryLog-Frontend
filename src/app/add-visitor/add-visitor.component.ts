import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Visitor } from '../Model/_Visitor';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  id: any;
  visitor: Visitor=new Visitor();
  visitType: any;
  managerList: any;
  today:any = null;

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.time();
    this.viewVisitorType();
  }
  time(){
    this.visitor.dateOfEntry = moment().format("YYYY/MM/DD");

  
  }
  addVisitor(){
    this.service.postVisitor(this.id,this.visitor).subscribe(
      res=>{
        alert("Added Successfully");
      }
    );
  }
  visitChanged(event:any){
    this.id=event.target.value;
  }
  viewVisitorType(){
    this.service.getVisitorType().subscribe(
      res=>{
        this.visitType=res.$values;
        console.log(this.visitType);
      }
    );
  }
  changedManager(event:any){
    this.id=event.target.value;
  }
  viewManager(){
    this.service.getManager().subscribe(
      res=>{
        this.managerList=res;
        console.log(this.manager);
      }
    );
  }
  manager(manager: any) {
    throw new Error('Method not implemented.');
  }
}
