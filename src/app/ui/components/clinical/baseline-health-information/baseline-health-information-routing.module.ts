import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaselineHealthInformationComponent } from './baseline-health-information.component';

const routes: Routes = [{ path: '', component: BaselineHealthInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaselineHealthInformationRoutingModule { }
