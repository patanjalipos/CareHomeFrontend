import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPowerOfAttorneyComponent } from './first-power-of-attorney.component';

const routes: Routes = [{ path: '', component: FirstPowerOfAttorneyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPowerOfAttorneyRoutingModule { }
