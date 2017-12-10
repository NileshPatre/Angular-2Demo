import { Component } from '@angular/core';
import {DataJsonService} from '../commonService/dataJsonService'
import {IEmployees} from '../interfaces/Employees'
@Component({
  templateUrl:"./jsonData.component.html",
  providers:[DataJsonService]
})
export class JsonDataComponent  { 
    employeeData:IEmployees[];
    statusMessage:string="Data is Loading";
    constructor(private _dataJsonService:DataJsonService){};
    ngOnInit(){
        this._dataJsonService.getEmployees().subscribe(response=>this.employeeData=response,error=>
            {this.statusMessage="Problem with Server"
        });
    }
    
}
