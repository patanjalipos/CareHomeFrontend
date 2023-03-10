import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentIndicatorsComponent } from './resident-indicators.component';

const routes: Routes = [{ path: '', component: ResidentIndicatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentIndicatorsRoutingModule { }
