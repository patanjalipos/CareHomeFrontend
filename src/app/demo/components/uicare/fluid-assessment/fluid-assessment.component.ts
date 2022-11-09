import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-assessment',
  templateUrl: './fluid-assessment.component.html',
  styleUrls: ['./fluid-assessment.component.scss']
})
export class FluidAssessmentComponent implements OnInit {
  DailyIntakeObj:any=<any>{};
  constructor() { 
    this.DailyIntakeObj.TargetIntake=1500;
    this.DailyIntakeObj.TargetTime='08:00';
    this.DailyIntakeObj.UpdatedBy="Jhon Thomas";
    this.DailyIntakeObj.UpdatedTime="09-11-2022 15:17";
  }

  ngOnInit(): void {
  }

}
