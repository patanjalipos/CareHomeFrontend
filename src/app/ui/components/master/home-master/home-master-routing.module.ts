import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMasterComponent } from './home-master.component';

const routes: Routes = [{ path: '', component: HomeMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMasterRoutingModule { }
