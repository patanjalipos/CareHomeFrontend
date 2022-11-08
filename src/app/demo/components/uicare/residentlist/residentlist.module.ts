import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentlistComponent } from './residentlist.component';
import { ResidentlistRoutingModule } from './residentlist-routing.module';
import { TableModule } from 'primeng/table';


@NgModule({
declarations: [ResidentlistComponent],
imports: [
    CommonModule,
    ResidentlistRoutingModule,
    TableModule
  ]})
export class ResidentlistModule { }
