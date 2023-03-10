import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryContactRoutingModule } from './secondary-contact-routing.module';
import { SecondaryContactComponent } from './secondary-contact.component';


@NgModule({
  declarations: [
    SecondaryContactComponent
  ],
  imports: [
    CommonModule,
    SecondaryContactRoutingModule
  ],
  exports:[SecondaryContactComponent]
})
export class SecondaryContactModule { }
