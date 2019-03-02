import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedDeviceId:string ="";

  @Output()
  ondeviceIdChanged:EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataservice:DataServiceService) { }

  ngOnInit() {
  }

  getdata(deviceId:any):void{
    this.ondeviceIdChanged.emit(deviceId);
    console.log("Inserting "+deviceId);
    
   
    
  }
  chnageDropDownValue():void{
    console.log("Hello");
    
  }
 

}
