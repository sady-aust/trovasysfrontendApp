import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import {Chart} from 'chart.js';
import 'chartjs-plugin-streaming';
@Component({
  selector: 'app-poultry',
  templateUrl: './poultry.component.html',
  styleUrls: ['./poultry.component.css']
})
export class PoultryComponent implements OnInit {

  selectedDeviceId:string="";
  currentData:any;
  
  LineChart:Chart;
  LineChart1:Chart
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
         label: 'Humidity Value',
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
  onDeviceIdChange(selectedDeviceId:string):void{
    this.selectedDeviceId = selectedDeviceId;
    let date = new Date();
    let today = "2019-3-3";

    this.dataService.getPoultryData(selectedDeviceId,today).subscribe(
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

     this.LineChart1.data.labels.push(this.currentData.humidity.timestamp)
     this.LineChart1.data.datasets[0].data.push(this.currentData.humidity.value);

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
    //let today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    let today = "2019-3-3";
      this.dataService.getPoultryData(selectedDeviceId,today).subscribe(
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

       this.LineChart1.data.labels.push(this.currentData.humidity.timestamp)
       this.LineChart1.data.datasets[0].data.push(this.currentData.humidity.value);

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
