import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarePassportRoutingModule } from './care-passport-routing.module';
import { CarePassportComponent } from './care-passport.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarePassportComponent
  ],
  imports: [
    CommonModule,
    CarePassportRoutingModule,
    TabViewModule,
    TableModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    ToastModule,
    FormsModule
  ],
  exports:[CarePassportComponent]
})
export class CarePassportModule { }
