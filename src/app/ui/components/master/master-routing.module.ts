import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'menu-master', loadChildren: () => import('./menu-item-master/menu-item-master.module').then(m => m.MenuItemMasterModule) },
  { path: 'user-master', loadChildren: () => import('./user-master/user-master.module').then(m => m.UserMasterModule) },
  { path: 'resident-master', loadChildren: () => import('./resident-master/resident-master.module').then(m => m.ResidentMasterModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
