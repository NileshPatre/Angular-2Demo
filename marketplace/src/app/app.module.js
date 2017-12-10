"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var recommendations_component_1 = require("./recommendations/recommendations.component");
var header_component_1 = require("./header/header.component");
var navigation_component_1 = require("./navigationBar/navigation.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var jsonData_component_1 = require("./dataFromJson/jsonData.component");
var loadCsv_component_1 = require("./loadCSV/loadCsv.component");
var codemirror_component_1 = require("./codeMirrorDemo/codemirror.component");
var pageNotFoundComponent_1 = require("./otherComponents/pageNotFoundComponent");
var http_1 = require("@angular/http");
var ng2_select2_1 = require("ng2-select2");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'dataFromJson', component: jsonData_component_1.JsonDataComponent },
    { path: 'dataFromCSV', component: loadCsv_component_1.LoadCsvComponent },
    { path: 'codeMirror', component: codemirror_component_1.CodeMirrorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [ng2_select2_1.Select2Module, http_1.HttpModule, platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
        declarations: [app_component_1.AppComponent, recommendations_component_1.RecommendationsComponent, header_component_1.HeaderComponent, navigation_component_1.NavigationComponent, home_component_1.HomeComponent, jsonData_component_1.JsonDataComponent, codemirror_component_1.CodeMirrorComponent, pageNotFoundComponent_1.PageNotFoundComponent, loadCsv_component_1.LoadCsvComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map