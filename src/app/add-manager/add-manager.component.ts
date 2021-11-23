import { Component, OnInit } from '@angular/core';
import { Manager } from '../Model/_Manager';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  manager:Manager= new Manager();

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }
  AddManager() {
    this.service.postManager(this.manager).subscribe(
      res => {
        alert("Added Successfully");
      }
    );
  }
}
