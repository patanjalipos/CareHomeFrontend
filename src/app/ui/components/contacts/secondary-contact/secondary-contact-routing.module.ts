import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondaryContactComponent } from './secondary-contact.component';

const routes: Routes = [{ path: '', component: SecondaryContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryContactRoutingModule { }
