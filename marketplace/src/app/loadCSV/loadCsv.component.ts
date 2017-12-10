import { Component,OnInit  } from '@angular/core';
import {DataCSVService} from '../commonService/dataCSVService'
import { Select2OptionData } from 'ng2-select2';
@Component({
    templateUrl:"./csvComponent.html",
    providers:[DataCSVService]
})
export class LoadCsvComponent implements OnInit {
    jsonObject:any[];
    statusMessage:string="Data is Loading";
    dropdownList:any[];
    public exampleData: Array<Select2OptionData>;
    public options: Select2Options;
    public value: string[];
    public current: string;
   
    
    constructor(private _dataCSVService:DataCSVService){};
    changed(data: {value: string[]}) {
        this.current = data.value.join(' | ');
      }
    ngOnInit(){
        this._dataCSVService.getEmployees().subscribe(response=>this.csvJSON(response),error=>
            {this.statusMessage="Problem with Server"
        });

        this.exampleData = [
            {
              id: 'multiple1',
              text: 'Multiple 1'
            },
            {
              id: 'multiple2',
              text: 'Multiple 2'
            },
            {
              id: 'multiple3',
              text: 'Multiple 3'
            },
            {
              id: 'multiple4',
              text: 'Multiple 4'
            }
          ];
        this.value = ['multiple2', 'multiple4'];
        
           
        
            this.current = this.value.join(' | ');
          
        
         
    
        this.options = {
            multiple: true
          }
    }
    csvJSON(csvText:any) {
        var lines = csvText.split("\n");
 
        var result = [];
 
        var headers = lines[0].split(",");
        console.log(headers);
        for (var i = 1; i < lines.length-1; i++) {
 
            var obj = {};
            var currentline = lines[i].split(",");
 
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
 
            result.push(obj);
 
        }
 
        //return result; //JavaScript object
        //console.log(JSON.stringify(result)); //JSON
        //this.jsonObject = JSON.stringify(result);
        this.jsonObject = result;
        console.log(this.jsonObject);
        this.dropdownList=result;
        
     }
 }
