"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dataCSVService_1 = require("../commonService/dataCSVService");
var LoadCsvComponent = (function () {
    function LoadCsvComponent(_dataCSVService) {
        this._dataCSVService = _dataCSVService;
        this.statusMessage = "Data is Loading";
    }
    ;
    LoadCsvComponent.prototype.changed = function (data) {
        this.current = data.value.join(' | ');
    };
    LoadCsvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataCSVService.getEmployees().subscribe(function (response) { return _this.csvJSON(response); }, function (error) {
            _this.statusMessage = "Problem with Server";
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
        };
    };
    LoadCsvComponent.prototype.csvJSON = function (csvText) {
        var lines = csvText.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        console.log(headers);
        for (var i = 1; i < lines.length - 1; i++) {
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
        this.dropdownList = result;
    };
    return LoadCsvComponent;
}());
LoadCsvComponent = __decorate([
    core_1.Component({
        templateUrl: "./csvComponent.html",
        providers: [dataCSVService_1.DataCSVService]
    }),
    __metadata("design:paramtypes", [dataCSVService_1.DataCSVService])
], LoadCsvComponent);
exports.LoadCsvComponent = LoadCsvComponent;
//# sourceMappingURL=loadCsv.component.js.map