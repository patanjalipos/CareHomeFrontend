import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentIndicatorsRoutingModule } from './resident-indicators-routing.module';
import { ResidentIndicatorsComponent } from './resident-indicators.component';


@NgModule({
  declarations: [
    ResidentIndicatorsComponent
  ],
  imports: [
    CommonModule,
    ResidentIndicatorsRoutingModule
  ],
  exports:[ResidentIndicatorsComponent]
})
export class ResidentIndicatorsModule { }
