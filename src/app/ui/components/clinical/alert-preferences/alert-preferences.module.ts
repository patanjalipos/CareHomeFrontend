import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertPreferencesRoutingModule } from './alert-preferences-routing.module';
import { AlertPreferencesComponent } from './alert-preferences.component';


@NgModule({
  declarations: [
    AlertPreferencesComponent
  ],
  imports: [
    CommonModule,
    AlertPreferencesRoutingModule
  ],
  exports:[AlertPreferencesComponent]
})
export class AlertPreferencesModule { }
