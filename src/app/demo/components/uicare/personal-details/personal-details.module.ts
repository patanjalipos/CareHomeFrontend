import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsComponent } from './personal-details.component';

import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule,
    TabViewModule
  ],
  exports:[PersonalDetailsComponent]
})
export class PersonalDetailsModule { }
