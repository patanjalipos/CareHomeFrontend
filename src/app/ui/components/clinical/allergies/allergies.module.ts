import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergiesRoutingModule } from './allergies-routing.module';
import { AllergiesComponent } from './allergies.component';


@NgModule({
  declarations: [
    AllergiesComponent
  ],
  imports: [
    CommonModule,
    AllergiesRoutingModule
  ],
  exports:[AllergiesComponent]
})
export class AllergiesModule { }
