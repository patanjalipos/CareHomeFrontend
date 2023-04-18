import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergiesRoutingModule } from './allergies-routing.module';
import { AllergiesComponent } from './allergies.component';
import {FormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [
    AllergiesComponent
  ],
  imports: [
    CommonModule,
    AllergiesRoutingModule,
    FormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  exports:[AllergiesComponent]
})
export class AllergiesModule { }
