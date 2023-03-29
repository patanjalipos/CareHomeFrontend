import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryContactRoutingModule } from './secondary-contact-routing.module';
import { SecondaryContactComponent } from './secondary-contact.component';
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
@NgModule({
  declarations: [
    SecondaryContactComponent
  ],
  imports: [
    CommonModule,
    SecondaryContactRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[SecondaryContactComponent]
})
export class SecondaryContactModule { }
