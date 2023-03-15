import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-contact',
  templateUrl: './primary-contact.component.html',
  styleUrls: ['./primary-contact.component.scss']
})
export class PrimaryContactComponent implements OnInit {
  
  mode:string='view';
  primartContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.primartContact = {
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
