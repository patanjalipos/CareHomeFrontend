import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryContactComponent } from './primary-contact.component';

const routes: Routes = [{ path: '', component: PrimaryContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryContactRoutingModule { }
