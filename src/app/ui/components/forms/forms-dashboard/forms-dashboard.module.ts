import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDashboardRoutingModule } from './forms-dashboard-routing.module';
import { FormsDashboardComponent } from './forms-dashboard.component';


@NgModule({
  declarations: [
    
    FormsDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsDashboardRoutingModule
  ],

  exports:[
    FormsDashboardComponent,
  ]
})
export class FormsDashboardModule { }
