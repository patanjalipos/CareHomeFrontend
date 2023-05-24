import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'resident-master', loadChildren: () => import('./resident-master/resident-master.module').then(m => m.ResidentMasterModule) },
  { path: 'resident-profile', loadChildren: () => import('./resident-profile/resident-profile.module').then(m => m.ResidentProfileModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
