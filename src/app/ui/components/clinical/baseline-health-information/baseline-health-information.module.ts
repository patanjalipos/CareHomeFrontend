import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselineHealthInformationRoutingModule } from './baseline-health-information-routing.module';
import { BaselineHealthInformationComponent } from './baseline-health-information.component';


@NgModule({
  declarations: [
    BaselineHealthInformationComponent
  ],
  imports: [
    CommonModule,
    BaselineHealthInformationRoutingModule
  ],
  exports:[BaselineHealthInformationComponent]
})
export class BaselineHealthInformationModule { }
