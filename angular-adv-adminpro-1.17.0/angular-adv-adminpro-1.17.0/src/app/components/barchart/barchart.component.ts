import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  
  constructor() { }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: any[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

  ngOnInit(): void {
  }

}
