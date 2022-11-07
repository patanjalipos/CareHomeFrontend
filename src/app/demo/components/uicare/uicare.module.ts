import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UicareRoutingModule } from './uicare-routing.module';
import { ResidentlistComponent } from './residentlist/residentlist.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ResidentlistComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    UicareRoutingModule,
    TableModule
  ]
})
export class UicareModule { }
