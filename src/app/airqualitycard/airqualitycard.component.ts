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
  airCondition:string ="Normal";
  constructor() { }

  ngOnInit() {
    if(this.cardname === 'Air Quality'){
      if(parseInt(this.value.toString())>450){
        this.airCondition = "Unhealthy"
      }
      else if(parseInt(this.value.toString())<=450){
        this.airCondition = "Normal"
      }
    }
  }

}
