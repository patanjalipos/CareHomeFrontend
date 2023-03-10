import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartPreferencesRoutingModule } from './chart-preferences-routing.module';
import { ChartPreferencesComponent } from './chart-preferences.component';


@NgModule({
  declarations: [
    ChartPreferencesComponent
  ],
  imports: [
    CommonModule,
    ChartPreferencesRoutingModule
  ],
  exports:[ChartPreferencesComponent]
})
export class ChartPreferencesModule { }
