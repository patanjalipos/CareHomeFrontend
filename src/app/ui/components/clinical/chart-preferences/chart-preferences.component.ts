import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-preferences',
  templateUrl: './chart-preferences.component.html',
  styleUrls: ['./chart-preferences.component.scss']
})
export class ChartPreferencesComponent implements OnInit {
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
