import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  mode:string='view';
  doctorContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.doctorContact = {
      'ContactNote':'-',
      'SurgenName':'Dianne',
      'Address1':'13-Helow Building',
      'Address2':'35- twin Building Block-C',
      'Town':'London',
      'Country':'England',
      'Postcode':'234233',
      'SurgenPhoneNumber':'9837362882',
      'SurgenFaxNumber':'973498349',
      'Email':'Dund@gmail.com',
      'DrFirstName':'Dianne ',
      'DrLastName':'Russell',
      'DrFaxNumber':'9345893458',
      'DrPhoneNumber':'9793475345',
      'DrMobileNumber':'9837362882',
      'DrEmailAddress':'thvs@gmail.com'
    }
  }
  edit()
  {
    this.mode='edit'
  }
  close()
  {
    this.mode='view'
  }
  save()
  {
    this.mode='view'
  }

}
