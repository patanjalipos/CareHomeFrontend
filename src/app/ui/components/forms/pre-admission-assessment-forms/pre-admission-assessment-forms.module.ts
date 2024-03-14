import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAdmissionAssessmentFormsRoutingModule } from './pre-admission-assessment-forms-routing.module';
import { PreAdmissionAssessmentFormsComponent } from './pre-admission-assessment-forms.component';


@NgModule({
  declarations: [
    PreAdmissionAssessmentFormsComponent
  ],
  imports: [
    CommonModule,
    PreAdmissionAssessmentFormsRoutingModule
  ],
  exports:[PreAdmissionAssessmentFormsComponent]
})
export class PreAdmissionAssessmentFormsModule { }
