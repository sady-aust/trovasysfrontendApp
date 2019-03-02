import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { from } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})
export class DairyComponent implements OnInit {
  LineChart:Chart;
  LineChart1:Chart;
  LineChart2:Chart;

  selectedDeviceId:string="";
  currentData:any;

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: [],
     datasets: [{
         label: 'Temperature Value',
         data: [],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });


    this.LineChart1 = new Chart('lineChart1', {
      type: 'line',
    data: {
     labels: [],
     datasets: [{
         label: 'x_accel',
         data: [],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     },{
      label: 'y_accel',
      data: [],
      fill:false,
      lineTension:0.2,
      borderColor:"blue",
      borderWidth: 1
  },{
    label: 'z_accel',
    data: [],
    fill:false,
    lineTension:0.2,
    borderColor:"green",
    borderWidth: 1
}]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });

    this.LineChart2 = new Chart('lineChart2', {
      type: 'line',
    data: {
     labels: [],
     datasets: [{
         label: 'Motion g',
         data: [],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

  onDeviceIdChangeInDairy(selectedDeviceId:string):void{
   this.selectedDeviceId = selectedDeviceId;
   let date = new Date();
    let today = "2019-3-3";
   this.dataService.getDairyData(selectedDeviceId,today).subscribe(
    (data)=>{
   this.currentData = data;

  /*  this.LineChart.data.labels.push(data.temperature.timestamp);
   this.LineChart.data.datasets[0].data.push(data.temperature.value); */
  },
  (err) => console.error(err),
  () => {
    console.log(this.currentData);
    
     this.LineChart.data.labels.push(this.currentData.temperature.timestamp);
   this.LineChart.data.datasets[0].data.push(this.currentData.temperature.value);

    this.LineChart1.data.labels.push(this.currentData.motion.timestamp)
   this.LineChart1.data.datasets[0].data.push(this.currentData.motion.x_accel); 
   this.LineChart1.data.datasets[1].data.push(this.currentData.motion.y_accel); 
   this.LineChart1.data.datasets[2].data.push(this.currentData.motion.z_accel); 

   if(this.LineChart.data.labels.length>5){
    this.LineChart.data.labels.shift();
   }
   if(this.LineChart.data.datasets[0].data.length>5){
    this.LineChart.data.datasets[0].data.shift();
   }

    if(this.LineChart1.data.labels.length>5){
    this.LineChart1.data.labels.shift();
   }
   if(this.LineChart1.data.datasets[0].data.length>5){
    this.LineChart1.data.datasets[0].data.shift();
   }
 

   this.LineChart.update();
   this.LineChart1.update();

   
  });

  setInterval(()=>{
    let date = new Date();
    let today = "2019-3-3";
    this.dataService.getDairyData(selectedDeviceId,today).subscribe(
      (data)=>{
     this.currentData = data;
  
    /*  this.LineChart.data.labels.push(data.temperature.timestamp);
     this.LineChart.data.datasets[0].data.push(data.temperature.value); */
    },
    (err) => console.error(err),
    () => {
      console.log(this.currentData);
      
       this.LineChart.data.labels.push(this.currentData.temperature.timestamp);
     this.LineChart.data.datasets[0].data.push(this.currentData.temperature.value);
  
      this.LineChart1.data.labels.push(this.currentData.motion.timestamp)
     this.LineChart1.data.datasets[0].data.push(this.currentData.motion.x_accel); 
     this.LineChart1.data.datasets[1].data.push(this.currentData.motion.y_accel); 
     this.LineChart1.data.datasets[2].data.push(this.currentData.motion.z_accel); 
  
     if(this.LineChart.data.labels.length>5){
      this.LineChart.data.labels.shift();
     }
     if(this.LineChart.data.datasets[0].data.length>5){
      this.LineChart.data.datasets[0].data.shift();
     }
  
      if(this.LineChart1.data.labels.length>5){
      this.LineChart1.data.labels.shift();
     }
     if(this.LineChart1.data.datasets[0].data.length>5){
      this.LineChart1.data.datasets[0].data.shift();
     }
   
  
     this.LineChart.update();
     this.LineChart1.update();
  
     
    });
  
  },11000);
    
  }

}
