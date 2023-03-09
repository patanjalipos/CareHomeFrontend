import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPreferencesComponent } from './chart-preferences.component';

const routes: Routes = [{ path: '', component: ChartPreferencesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartPreferencesRoutingModule { }
