import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartPreferencesRoutingModule } from './chart-preferences-routing.module';
import { ChartPreferencesComponent } from './chart-preferences.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    ChartPreferencesComponent
  ],
  imports: [
    CommonModule,
    ChartPreferencesRoutingModule,
    RadioButtonModule,
    FormsModule
  ],
  exports:[ChartPreferencesComponent]
})
export class ChartPreferencesModule { }
