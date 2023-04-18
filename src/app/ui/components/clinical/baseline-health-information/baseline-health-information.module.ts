import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselineHealthInformationRoutingModule } from './baseline-health-information-routing.module';
import { BaselineHealthInformationComponent } from './baseline-health-information.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    BaselineHealthInformationComponent
  ],
  imports: [
    CommonModule,
    BaselineHealthInformationRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[BaselineHealthInformationComponent]
})
export class BaselineHealthInformationModule { }
