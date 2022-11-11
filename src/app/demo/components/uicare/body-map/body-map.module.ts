import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BodyMapRoutingModule } from './body-map-routing.module';
import { BodyMapComponent } from './body-map.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [
    BodyMapComponent
  ],
  imports: [
    CommonModule,
    BodyMapRoutingModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    DialogModule,
    FormsModule,
    ToolbarModule
  ],
  exports:[BodyMapComponent],
  providers: [
    DatePipe,
  ]
})
export class BodyMapModule { }
