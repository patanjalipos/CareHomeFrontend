import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DietPlannerRoutingModule } from './diet-planner-routing.module';
import { DietPlannerComponent } from './diet-planner.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [DietPlannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    DietPlannerRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
  ],
  exports:[DietPlannerComponent],
})
export class DietPlannerModule { }
