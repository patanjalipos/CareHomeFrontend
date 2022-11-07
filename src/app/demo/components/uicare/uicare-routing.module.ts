import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ResidentlistComponent } from './residentlist/residentlist.component';

const routes: Routes = [
  { 
    path: 'residentlist', 
    component: ResidentlistComponent 
  },
  {
    path: '',
    component:AdminDashboardComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UicareRoutingModule { }
