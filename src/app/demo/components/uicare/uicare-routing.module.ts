import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', data: { breadcrumb: 'Dashboard'}, loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
    { path: 'residentlist', data: { breadcrumb: 'Resident List'}, loadChildren: () => import('./residentlist/residentlist.module').then(m => m.ResidentlistModule) },
    { path: 'residentprofile', data: { breadcrumb: 'Resident Profile'}, loadChildren: () => import('./resident-profile/resident-profile.module').then(m => m.ResidentProfileModule) },
    { path: 'fallriskassessmentreport', data: { breadcrumb: 'Fall Risk Assessment Report'}, loadChildren: () => import('./fall-risk-assessment-report/fall-risk-assessment-report.module').then(m => m.FallRiskAssessmentReportModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class UicareRoutingModule { }
