import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
//import {ChartsModule } from  'ng2-charts';
import { NgChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { BarchartComponent } from './barchart/barchart.component';
import { RadarComponent } from './radar/radar.component';


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    ModalImagenComponent,
    BarchartComponent,
    RadarComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    ModalImagenComponent,
    BarchartComponent,
    RadarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
