import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-power-of-attorney',
  templateUrl: './second-power-of-attorney.component.html',
  styleUrls: ['./second-power-of-attorney.component.scss']
})
export class SecondPowerOfAttorneyComponent implements OnInit {
  mode:string='view';
  SecondPowerOfAttorneyContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.SecondPowerOfAttorneyContact = {
      'ContactNote':'-',
      'FirstName':'Dianne ',
      'LastName':'Russell',
      'Othertype':'London',
      'Attorneytype':'Home',
      'Telephone':'9837362882'
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

