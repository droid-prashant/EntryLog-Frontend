import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddVisitTypeComponent } from './add-visit-type/add-visit-type.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';

const routes: Routes = [
  {
    path:"addManager", component:AddManagerComponent
  },
  {
    path:"addVisitorType", component:AddVisitTypeComponent
  },
  {
    path:"addVisitor", component:AddVisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
