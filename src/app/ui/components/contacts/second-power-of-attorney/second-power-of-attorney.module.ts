import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPowerOfAttorneyRoutingModule } from './second-power-of-attorney-routing.module';
import { SecondPowerOfAttorneyComponent } from './second-power-of-attorney.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SecondPowerOfAttorneyComponent
  ],
  imports: [
    CommonModule,
    SecondPowerOfAttorneyRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[SecondPowerOfAttorneyComponent]
})
export class SecondPowerOfAttorneyModule { }
