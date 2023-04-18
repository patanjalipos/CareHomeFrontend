import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiblePersonContactRoutingModule } from './responsible-person-contact-routing.module';
import { ResponsiblePersonContactComponent } from './responsible-person-contact.component';
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    ResponsiblePersonContactComponent
  ],
  imports: [
    CommonModule,
    ResponsiblePersonContactRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[ResponsiblePersonContactComponent]
})
export class ResponsiblePersonContactModule { }
