import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[DoctorComponent]
})
export class DoctorModule { }
