import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FallRiskAssessmentRoutingModule } from './fall-risk-assessment-routing.module';
import { FallRiskAssessmentComponent } from './fall-risk-assessment.component';

import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [FallRiskAssessmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    FallRiskAssessmentRoutingModule,
    RadioButtonModule
  ],
  exports:[FallRiskAssessmentComponent]
})
export class FallRiskAssessmentModule { }
