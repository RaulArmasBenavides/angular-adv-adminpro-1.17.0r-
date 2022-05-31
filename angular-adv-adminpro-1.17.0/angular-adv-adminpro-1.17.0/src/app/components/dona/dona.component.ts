import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})


export class DonaComponent implements OnInit{
  
  constructor() { }

   ngOnInit(): void {
     this.createChart()
   }

   createChart(): void {
     Chart.register(...registerables)

    const data = {
       labels: ['Enero','Febrero','Marzo','Abril','Mayo'],
     datasets: [{
        label: 'My First dataset',
         backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
       }]
     };

      const options = {
       scales: {
          y: {
           beginAtZero: true,
            display: false
         }
       }
     }

     const config: ChartConfiguration = {
       type: 'bar',
       data: data,
       options: options
     }


     var els = document.getElementsByClassName("my-chart");

     Array.prototype.forEach.call(els, function(el) {
      // Do stuff here
      const chartItem: ChartItem = el as ChartItem
      new Chart(chartItem, config)
  });


    //  [...document.getElementsByClassName("mychartclass")]
    //  document.getElementsByClassName('my-chart').forEach(element => {
    //   const chartItem: ChartItem = element as ChartItem
    //   new Chart(chartItem, config)
    //  });
     //getElementById('my-chart') as ChartItem

  
   }
}
