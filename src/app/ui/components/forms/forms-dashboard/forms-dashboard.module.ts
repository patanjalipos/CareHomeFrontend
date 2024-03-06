import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDashboardRoutingModule } from './forms-dashboard-routing.module';
import { FormsDashboardComponent } from './forms-dashboard.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {MultiSelectModule} from 'primeng/multiselect';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";

@NgModule({
  declarations: [
    
    FormsDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsDashboardRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,

  ],

  exports:[
    FormsDashboardComponent,
  ]
})
export class FormsDashboardModule { }
