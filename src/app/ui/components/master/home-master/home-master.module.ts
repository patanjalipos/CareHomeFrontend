import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMasterRoutingModule } from './home-master-routing.module';
import { HomeMasterComponent } from './home-master.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    HomeMasterComponent
  ],
  imports: [
    CommonModule,
    HomeMasterRoutingModule,
    FormsModule,
    TableModule,
    DropdownModule,
    InputTextModule,
  ]
})
export class HomeMasterModule { }
