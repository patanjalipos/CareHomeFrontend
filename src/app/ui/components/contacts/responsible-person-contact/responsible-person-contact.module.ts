import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiblePersonContactRoutingModule } from './responsible-person-contact-routing.module';
import { ResponsiblePersonContactComponent } from './responsible-person-contact.component';


@NgModule({
  declarations: [
    ResponsiblePersonContactComponent
  ],
  imports: [
    CommonModule,
    ResponsiblePersonContactRoutingModule
  ],
  exports:[ResponsiblePersonContactComponent]
})
export class ResponsiblePersonContactModule { }
