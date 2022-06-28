import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})


export class DonaComponent{
  
  public doughnutChartLabels: Label[] = ['PHP', '.Net', 'Java'];
   
  public doughnutChartData: MultiDataSet = [
    [250, 150, 100],
    [160, 150, 130],
    [250, 130, 70],
  ];
   
  public doughnutChartType: ChartType = 'doughnut';
   
  constructor() { }
     
  ngOnInit() {
  }

  
   }
