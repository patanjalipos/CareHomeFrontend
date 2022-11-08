import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentlistComponent } from './residentlist.component';

const routes: Routes = [{ path: '', component: ResidentlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentlistRoutingModule { }
