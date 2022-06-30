import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
//import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})


export class DonaComponent{
  
   // Doughnut
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ] },
       { data: [ 50, 150, 120 ] },
       { data: [ 250, 130, 70 ] }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';
 
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }

  
   }
