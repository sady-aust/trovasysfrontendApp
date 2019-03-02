import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-airqualitycard',
  templateUrl: './airqualitycard.component.html',
  styleUrls: ['./airqualitycard.component.css']
})
export class AirqualitycardComponent implements OnInit {
  @Input()
  cardname;
@Input()
  value

  covalue:number;
  airCondition:string ="Normal";
  constructor() { 
  
    
  }

  ngOnInit() {
   
    
  }

}
