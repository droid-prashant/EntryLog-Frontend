import { Component, OnInit } from '@angular/core';
import { VisitType } from '../Model/VIsitType';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-visit-type',
  templateUrl: './add-visit-type.component.html',
  styleUrls: ['./add-visit-type.component.css']
})
export class AddVisitTypeComponent implements OnInit {
  type: VisitType=new VisitType();

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }
  AddVisitType(){
    this.service.postVisitType(this.type).subscribe(
      res=> {
        alert("Added Successfully");
        console.log(res);
      }
    )
  }
}
