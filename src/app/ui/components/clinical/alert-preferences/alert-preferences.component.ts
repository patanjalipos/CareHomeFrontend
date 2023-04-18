import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-preferences',
  templateUrl: './alert-preferences.component.html',
  styleUrls: ['./alert-preferences.component.scss']
})
export class AlertPreferencesComponent implements OnInit {
  mode:string='view';
  valRadio1: string = "Enable";
  valRadio2: string = "Disable";
  valRadio3: string = "Enable";
  valRadio4: string = "Enable";
  valRadio5: string = "Disable";
  valRadio6: string = "Enable";
  valRadio7: string = "Disable";
  valRadio8: string = "Enable";
  valRadio9: string = "Disable";
  valRadio10: string = "Enable";
  valRadio11: string = "Enable";
  valRadio12: string = "Disable";
  constructor() { }

  ngOnInit(): void {
  }

}
