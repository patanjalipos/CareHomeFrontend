import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluidAssessmentRoutingModule } from './fluid-assessment-routing.module';
import { FluidAssessmentComponent } from './fluid-assessment.component';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    FluidAssessmentComponent
  ],
  imports: [
    CommonModule,
    FluidAssessmentRoutingModule,
    AccordionModule,
    FormsModule,
    AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
  ],
  exports:[FluidAssessmentComponent]
})
export class FluidAssessmentModule { }
