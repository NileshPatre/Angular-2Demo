import { Injectable } from '@angular/core';  
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IEmployees} from '../interfaces/Employees'
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataCSVService {  
    csvUrl="app/files/csvData.csv";
   constructor (private _http: Http) {};
   getEmployees() : Observable<string> {
       
                
                return this._http.get(this.csvUrl)
                               
                                .map((response:Response) => response.text())
                       
                                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
       
            }
}