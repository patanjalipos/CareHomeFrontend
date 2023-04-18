import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalInformationComponent } from './clinical-information.component';

const routes: Routes = [{ path: '', component: ClinicalInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalInformationRoutingModule { }
