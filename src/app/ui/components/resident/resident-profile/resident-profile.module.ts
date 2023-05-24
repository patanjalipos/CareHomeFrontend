import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentProfileRoutingModule } from './resident-profile-routing.module';
import { ResidentProfileComponent } from './resident-profile.component';


@NgModule({
  declarations: [
    ResidentProfileComponent
  ],
  imports: [
    CommonModule,
    ResidentProfileRoutingModule
  ],
  exports:[ResidentProfileComponent]
})
export class ResidentProfileModule { }
