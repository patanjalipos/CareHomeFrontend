import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDashboardRoutingModule } from './forms-dashboard-routing.module';
import { FormsDashboardComponent } from './forms-dashboard.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    FormsDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsDashboardRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    DropdownModule
  ],

  exports:[
    FormsDashboardComponent,
  ]
})

export class FormsDashboardModule { }
