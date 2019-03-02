import { Component, OnInit, Input } from '@angular/core';
import 'chartjs-plugin-streaming';
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  @Input()
  aCurrentData:any;

  
  constructor() { }

  ngOnInit() {
  }

}
