import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalInformationRoutingModule } from './clinical-information-routing.module';
import { ClinicalInformationComponent } from './clinical-information.component';


@NgModule({
  declarations: [
    ClinicalInformationComponent
  ],
  imports: [
    CommonModule,
    ClinicalInformationRoutingModule
  ],
  exports:[ClinicalInformationComponent]
})
export class ClinicalInformationModule { }
