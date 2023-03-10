import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPowerOfAttorneyComponent } from './second-power-of-attorney.component';

const routes: Routes = [{ path: '', component: SecondPowerOfAttorneyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondPowerOfAttorneyRoutingModule { }
