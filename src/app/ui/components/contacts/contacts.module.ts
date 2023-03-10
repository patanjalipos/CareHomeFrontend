import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { PrimaryContactModule } from './primary-contact/primary-contact.module';
import { SecondaryContactModule } from './secondary-contact/secondary-contact.module';
import { ResponsiblePersonContactModule } from './responsible-person-contact/responsible-person-contact.module';
import { FirstPowerOfAttorneyModule } from './first-power-of-attorney/first-power-of-attorney.module';
import { SecondPowerOfAttorneyModule } from './second-power-of-attorney/second-power-of-attorney.module';
import { DoctorModule } from './doctor/doctor.module';


@NgModule({
  declarations: [   
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PrimaryContactModule,
    SecondaryContactModule,
    ResponsiblePersonContactModule,
    FirstPowerOfAttorneyModule,
    SecondPowerOfAttorneyModule,
    DoctorModule

  ]
})
export class ContactsModule { }
