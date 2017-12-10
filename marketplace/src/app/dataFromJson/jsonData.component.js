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
var dataJsonService_1 = require("../commonService/dataJsonService");
var JsonDataComponent = (function () {
    function JsonDataComponent(_dataJsonService) {
        this._dataJsonService = _dataJsonService;
        this.statusMessage = "Data is Loading";
    }
    ;
    JsonDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataJsonService.getEmployees().subscribe(function (response) { return _this.employeeData = response; }, function (error) {
            _this.statusMessage = "Problem with Server";
        });
    };
    return JsonDataComponent;
}());
JsonDataComponent = __decorate([
    core_1.Component({
        templateUrl: "./jsonData.component.html",
        providers: [dataJsonService_1.DataJsonService]
    }),
    __metadata("design:paramtypes", [dataJsonService_1.DataJsonService])
], JsonDataComponent);
exports.JsonDataComponent = JsonDataComponent;
//# sourceMappingURL=jsonData.component.js.map