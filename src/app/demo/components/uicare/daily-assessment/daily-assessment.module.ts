import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyAssessmentComponent } from './daily-assessment.component';
import { DailyAssessmentRoutingModule } from './daily-assessment-routing.module';

import { InputTextModule } from "primeng/inputtext";
@NgModule({
  declarations: [DailyAssessmentComponent], 
  imports: [
    CommonModule,
    DailyAssessmentRoutingModule,
    InputTextModule
  ]
})
export class DailyAssessmentModule { }
