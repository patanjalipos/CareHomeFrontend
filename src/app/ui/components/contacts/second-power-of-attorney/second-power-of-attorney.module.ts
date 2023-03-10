import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPowerOfAttorneyRoutingModule } from './second-power-of-attorney-routing.module';
import { SecondPowerOfAttorneyComponent } from './second-power-of-attorney.component';


@NgModule({
  declarations: [
    SecondPowerOfAttorneyComponent
  ],
  imports: [
    CommonModule,
    SecondPowerOfAttorneyRoutingModule
  ],
  exports:[SecondPowerOfAttorneyComponent]
})
export class SecondPowerOfAttorneyModule { }
