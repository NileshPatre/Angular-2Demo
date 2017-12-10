import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RecommendationsComponent }  from './recommendations/recommendations.component';
import { HeaderComponent }  from './header/header.component';
import { NavigationComponent }  from './navigationBar/navigation.component';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JsonDataComponent} from './dataFromJson/jsonData.component';
import {LoadCsvComponent} from './loadCSV/loadCsv.component';
import {CodeMirrorComponent} from './codeMirrorDemo/codemirror.component';
import {PageNotFoundComponent} from './otherComponents/pageNotFoundComponent';
import {HttpModule} from '@angular/http';

import { Select2Module } from 'ng2-select2';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dataFromJson', component: JsonDataComponent },
  { path: 'dataFromCSV', component: LoadCsvComponent },
  { path: 'codeMirror', component: CodeMirrorComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent } 
];
@NgModule({
  imports:      [Select2Module,HttpModule,BrowserModule,RouterModule.forRoot(appRoutes,{useHash:true}) ],
  declarations: [ AppComponent,RecommendationsComponent, HeaderComponent,NavigationComponent,HomeComponent,JsonDataComponent,CodeMirrorComponent,PageNotFoundComponent,LoadCsvComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
