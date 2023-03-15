import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-contact',
  templateUrl: './secondary-contact.component.html',
  styleUrls: ['./secondary-contact.component.scss']
})
export class SecondaryContactComponent implements OnInit {

  mode:string='view';
  seondaryContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.seondaryContact = {
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

