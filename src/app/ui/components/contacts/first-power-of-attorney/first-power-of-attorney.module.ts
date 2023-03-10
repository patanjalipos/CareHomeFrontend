import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPowerOfAttorneyRoutingModule } from './first-power-of-attorney-routing.module';
import { FirstPowerOfAttorneyComponent } from './first-power-of-attorney.component';


@NgModule({
  declarations: [
    FirstPowerOfAttorneyComponent
  ],
  imports: [
    CommonModule,
    FirstPowerOfAttorneyRoutingModule
  ],
  exports:[FirstPowerOfAttorneyComponent]
})
export class FirstPowerOfAttorneyModule { }
