import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PoultryComponent } from './poultry/poultry/poultry.component';
import { DairyComponent } from './dairy/dairy/dairy.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MychartComponent } from './mychart/mychart.component';
import { AirqualitycardComponent } from './airqualitycard/airqualitycard.component';

const appRoutes:Routes =[
  {path:'poultry',component:PoultryComponent},
  {path:'dairy',component:DairyComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    PoultryComponent,
    DairyComponent,
    MychartComponent,
    AirqualitycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
