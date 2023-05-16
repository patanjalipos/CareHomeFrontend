import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseline-health-information',
  templateUrl: './baseline-health-information.component.html',
  styleUrls: ['./baseline-health-information.component.scss']
})
export class BaselineHealthInformationComponent implements OnInit {
  @Input() mode: string = 'view';
  @Input() userid: any = null;
  @Input() admissionid: any = null;
  Clinical: any = <any>{};
  healthinformation:any = <any>{};
  constructor() { }

  ngOnInit(): void {
    this.healthinformation = {
      'BowelPattern':'-',
      'Height':'56',
      'WeightUponAdm':'77',
      'WeightRangeMin':'66',
      'WeightRangeMax':'78',
      'PulseRangeMin':'65',
      'PulseRangeMax':'78',
      'BloodglucoseMin':'98',
      'BloodglucoseMax':'120',
      'SystolicBpMin':'35',
      'SystolicBpMax':'87',
      'DiastolicBpMin':'89',
      'DiastolicBpMax':'98',
      'FuildlevelMin':'86',
      'FuildlevelMax':'87',
      'OxygenSaturationMin':'45',
      'OxygenSaturationMax':'35'
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
