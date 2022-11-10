import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResidentlistComponent } from './residentlist.component';
import { ResidentlistRoutingModule } from './residentlist-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DataViewModule } from 'primeng/dataview';
@NgModule({
declarations: [ResidentlistComponent],
imports: [
    CommonModule,
    FormsModule,
    ResidentlistRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
    DataViewModule
  ]})
export class ResidentlistModule { }
