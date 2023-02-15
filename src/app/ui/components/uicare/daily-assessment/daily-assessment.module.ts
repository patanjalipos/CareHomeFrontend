import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAssessmentRoutingModule } from './daily-assessment-routing.module';
import { DailyAssessmentComponent } from './daily-assessment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    DailyAssessmentComponent
  ],
  imports: [
    CommonModule,
    DailyAssessmentRoutingModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
  ],
  exports:[DailyAssessmentComponent]

})
export class DailyAssessmentModule { }
