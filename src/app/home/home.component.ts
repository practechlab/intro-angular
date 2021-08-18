import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './EmployeeModel';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string="ansad";

  employee :EmployeeModel;
  constructor() { 
    this.employee=new EmployeeModel();
  }
   
  
  ngOnInit(): void {
    

  }
  onSave(employee:EmployeeModel){
    
    alert("Name : " + employee.name + ", Age: " + employee.age + ", Place: " + employee.place);

  }
 
  public clickCounter:number=0;
  public clickedFunction(){
    this.clickCounter+=1;
  }
}
