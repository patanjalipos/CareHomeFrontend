import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPowerOfAttorneyRoutingModule } from './first-power-of-attorney-routing.module';
import { FirstPowerOfAttorneyComponent } from './first-power-of-attorney.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    FirstPowerOfAttorneyComponent
  ],
  imports: [
    CommonModule,
    FirstPowerOfAttorneyRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[FirstPowerOfAttorneyComponent]
})
export class FirstPowerOfAttorneyModule { }
