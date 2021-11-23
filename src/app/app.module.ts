import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddVisitTypeComponent } from './add-visit-type/add-visit-type.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddManagerComponent,
    AddVisitTypeComponent,
    AddVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
