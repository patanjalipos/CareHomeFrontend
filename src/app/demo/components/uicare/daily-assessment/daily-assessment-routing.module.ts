import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyAssessmentComponent } from './daily-assessment.component';

const routes: Routes = [{ path: '', component: DailyAssessmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyAssessmentRoutingModule { }
