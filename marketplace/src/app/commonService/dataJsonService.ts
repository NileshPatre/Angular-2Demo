import { Injectable } from '@angular/core';  
 import { Http, Response } from '@angular/http';
 import {Observable} from 'rxjs/Rx';
 import {IEmployees} from '../interfaces/Employees'
 // Import RxJs required methods
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 @Injectable()
 export class DataJsonService {  
     jsonUrl="app/files/data.json";
    constructor (private _http: Http) {};
    getEmployees() : Observable<IEmployees[]> {
        
                 
                 return this._http.get(this.jsonUrl)
                                
                                 .map((response:Response) => <IEmployees[]>response.json())
                        
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
             }
 }