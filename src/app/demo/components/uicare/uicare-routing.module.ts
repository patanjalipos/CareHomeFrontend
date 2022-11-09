import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', data: { breadcrumb: 'Dashboard'}, loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
    { path: 'residentlist', data: { breadcrumb: 'Resident List'}, loadChildren: () => import('./residentlist/residentlist.module').then(m => m.ResidentlistModule) },
    { path: 'dailyassessment', data: {breadcrumb: 'Daily Assessment'}, loadChildren: () => import('./daily-assessment/daily-assessment.module').then(m => m.DailyAssessmentModule) },
    { path: 'residentprofile', data: { breadcrumb: 'Resident Profile'}, loadChildren: () => import('./resident-profile/resident-profile.module').then(m => m.ResidentProfileModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class UicareRoutingModule { }
