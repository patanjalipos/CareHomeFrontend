import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DailyReportRoutingModule } from './daily-report-routing.module';
import { DailyReportComponent } from './daily-report.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    DailyReportComponent
  ],
  imports: [
    CommonModule,
    DailyReportRoutingModule,
    TableModule,
    FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule
  ],
  exports:[
    DailyReportComponent
  ],
  providers: [
    DatePipe,
  ]
})
export class DailyReportModule { }
