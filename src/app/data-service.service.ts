import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private baseUrl:string ="https://frozen-ridge-52564.herokuapp.com";
  
  constructor(private http: HttpClient) { }

  getPoultryData(deviceId:any,adate:string):any{
    return this.http.get<any>(this.baseUrl + "/poultry/getdata" , {params: {
      date: adate,
      deviceid: deviceId
    }});

  }

  getDairyData(deviceId:any,adate:string):any{
    return this.http.get<any>(this.baseUrl + "/dairy/getdata" , {params: {
      date: adate,
      deviceid: deviceId
    }});
  }
}
