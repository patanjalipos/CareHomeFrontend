import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentMasterRoutingModule } from './resident-master-routing.module';
import { ResidentMasterComponent } from './resident-master.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TreeTableModule } from 'primeng/treetable';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ResidentMasterComponent
  ],
  imports: [
    CommonModule,
    ResidentMasterRoutingModule,
    FormsModule,
    ToastModule,
    TableModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    AccordionModule,
    TreeModule,
    OverlayPanelModule,
    ButtonModule,   
    CalendarModule,
    MultiSelectModule,
    TreeTableModule,
  ]
})
export class ResidentMasterModule { }
