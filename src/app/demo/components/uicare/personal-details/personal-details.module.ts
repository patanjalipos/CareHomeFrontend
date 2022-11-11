import { DailyAssessmentModule } from './../daily-assessment/daily-assessment.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsComponent } from './personal-details.component';

import {TabViewModule} from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RadioButtonModule } from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { DailyReportModule } from '../daily-report/daily-report.module';
@NgModule({
  providers: [
    DatePipe,
  ],
  declarations: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PersonalDetailsRoutingModule,
    TabViewModule,
    TableModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    ToastModule,
    DailyReportModule,
    DailyAssessmentModule
  ],
  exports:[PersonalDetailsComponent]
})
export class PersonalDetailsModule { }
