import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertPreferencesRoutingModule } from './alert-preferences-routing.module';
import { AlertPreferencesComponent } from './alert-preferences.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AlertPreferencesComponent
  ],
  imports: [
    CommonModule,
    AlertPreferencesRoutingModule,
    RadioButtonModule,
    FormsModule
  ],
  exports:[AlertPreferencesComponent]
})
export class AlertPreferencesModule { }
