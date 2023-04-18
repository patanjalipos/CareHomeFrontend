import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-power-of-attorney',
  templateUrl: './first-power-of-attorney.component.html',
  styleUrls: ['./first-power-of-attorney.component.scss']
})
export class FirstPowerOfAttorneyComponent implements OnInit {
  mode:string='view';
  firstPowerOfAttorneyContact:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.firstPowerOfAttorneyContact = {
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

