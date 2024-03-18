import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAdmissionAssessmentFormsRoutingModule } from './pre-admission-assessment-forms-routing.module';
import { PreAdmissionAssessmentFormsComponent } from './pre-admission-assessment-forms.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    PreAdmissionAssessmentFormsComponent
  ],
  imports: [
    CommonModule,
    PreAdmissionAssessmentFormsRoutingModule,
    ButtonModule,
    CalendarModule,
    DropdownModule

  
  ],
  exports:[PreAdmissionAssessmentFormsComponent]
})
export class PreAdmissionAssessmentFormsModule { }
