import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsible-person-contact',
  templateUrl: './responsible-person-contact.component.html',
  styleUrls: ['./responsible-person-contact.component.scss']
})
export class ResponsiblePersonContactComponent implements OnInit {

  mode:string='view';
  responsiblePersionContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.responsiblePersionContact = {
      'ContactNote':'-',
      'FirstName':'Dianne ',
      'LastName':'Russell',
      'ContactType':'Home',
      'MobileNumber':'798373628828',
      'HomeTelephone':'9837362882',
      'WorkTelephone':'9837362882',
      'Email':'Dund@gmail.com',
      'Address1':'13-Helow Building',
      'Address2':'35- twin Building Block-C',
      'Town':'London',
      'Country':'England',
      'Postcode':'234233'
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

