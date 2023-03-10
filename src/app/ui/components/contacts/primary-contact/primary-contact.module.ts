import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryContactRoutingModule } from './primary-contact-routing.module';
import { PrimaryContactComponent } from './primary-contact.component';


@NgModule({
  declarations: [
    PrimaryContactComponent
  ],
  imports: [
    CommonModule,
    PrimaryContactRoutingModule
  ],
  exports:[PrimaryContactComponent]
})
export class PrimaryContactModule { }
