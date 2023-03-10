import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiblePersonContactComponent } from './responsible-person-contact.component';

const routes: Routes = [{ path: '', component: ResponsiblePersonContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiblePersonContactRoutingModule { }
