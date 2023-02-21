import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemMasterComponent } from './menu-item-master.component';

const routes: Routes = [{ path: '', component: MenuItemMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuItemMasterRoutingModule { }
