import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalRoutingModule } from './clinical-routing.module';
import { ClinicalComponent } from './clinical.component';
import { AllergiesModule } from './allergies/allergies.module';
import { ResidentIndicatorsModule } from './resident-indicators/resident-indicators.module';
import { ClinicalInformationModule } from './clinical-information/clinical-information.module';
import { BaselineHealthInformationModule } from './baseline-health-information/baseline-health-information.module';
import { AlertPreferencesModule } from './alert-preferences/alert-preferences.module';
import { ChartPreferencesModule } from './chart-preferences/chart-preferences.module';


@NgModule({
  declarations: [
    ClinicalComponent
  ],
  imports: [
    CommonModule,
    ClinicalRoutingModule,
    AllergiesModule,
    ResidentIndicatorsModule,
    ClinicalInformationModule,
    BaselineHealthInformationModule,
    AlertPreferencesModule,
    ChartPreferencesModule
  ]
})
export class ClinicalModule { }
