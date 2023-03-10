import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalComponent } from './clinical.component';

const routes: Routes = [{ path: '', component: ClinicalComponent }
  // { path: 'allergies', loadChildren: () => import('./allergies/allergies.module').then(m => m.AllergiesModule) },
  // { path: 'resident-indicators', loadChildren: () => import('./resident-indicators/resident-indicators.module').then(m => m.ResidentIndicatorsModule) },
  // { path: 'clinical-information', loadChildren: () => import('./clinical-information/clinical-information.module').then(m => m.ClinicalInformationModule) },
  // { path: 'baseline-health-information', loadChildren: () => import('./baseline-health-information/baseline-health-information.module').then(m => m.BaselineHealthInformationModule) },
  // { path: 'alert-preferences', loadChildren: () => import('./alert-preferences/alert-preferences.module').then(m => m.AlertPreferencesModule) },
  // { path: 'chart-preferences', loadChildren: () => import('./chart-preferences/chart-preferences.module').then(m => m.ChartPreferencesModule) },
  // { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalRoutingModule { }
