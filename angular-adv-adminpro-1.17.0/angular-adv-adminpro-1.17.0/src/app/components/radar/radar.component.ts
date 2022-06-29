import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['PHP', '.Net', 'Java', 'Android', 'Node.JS'];
  
  public radarChartData: ChartDataSets[] = [
    { data: [62, 59, 80, 81, 56], label: 'Uses' },
    { data: [30, 48, 50, 29, 80], label: 'Popular' }
  ];
  public radarChartType: ChartType = 'radar';
  
  constructor() { }
  
  ngOnInit() {
  }
}
