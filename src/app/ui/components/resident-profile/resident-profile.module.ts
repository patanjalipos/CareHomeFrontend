import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentProfileRoutingModule } from './resident-profile-routing.module';
import { ResidentProfileComponent } from './resident-profile.component';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    ResidentProfileComponent
  ],
  imports: [
    CommonModule,
    ResidentProfileRoutingModule,
    ProfileModule
  ],
  exports:[ResidentProfileComponent]
})
export class ResidentProfileModule { }
