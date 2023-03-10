import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [{ path: '', component: ContactsComponent }
  // { path: 'primary-contact', loadChildren: () => import('./primary-contact/primary-contact.module').then(m => m.PrimaryContactModule) },
  // { path: 'secondary-contact', loadChildren: () => import('./secondary-contact/secondary-contact.module').then(m => m.SecondaryContactModule) },
  // { path: 'responsible-person-contact', loadChildren: () => import('./responsible-person-contact/responsible-person-contact.module').then(m => m.ResponsiblePersonContactModule) },
  // { path: 'first-power-of-attorney', loadChildren: () => import('./first-power-of-attorney/first-power-of-attorney.module').then(m => m.FirstPowerOfAttorneyModule) },
  // { path: 'second-power-of-attorney', loadChildren: () => import('./second-power-of-attorney/second-power-of-attorney.module').then(m => m.SecondPowerOfAttorneyModule) },
  // { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  //{ path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
