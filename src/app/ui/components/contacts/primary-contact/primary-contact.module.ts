import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryContactRoutingModule } from './primary-contact-routing.module';
import { PrimaryContactComponent } from './primary-contact.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    PrimaryContactComponent
  ],
  imports: [
    CommonModule,
    PrimaryContactRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[PrimaryContactComponent]
})
export class PrimaryContactModule { }
