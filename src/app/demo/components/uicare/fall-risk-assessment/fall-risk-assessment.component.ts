import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fall-risk-assessment',
  templateUrl: './fall-risk-assessment.component.html',
  styleUrls: ['./fall-risk-assessment.component.scss']
})
export class FallRiskAssessmentComponent implements OnInit {
  valRadio1: string = "Yes";
  valRadio2: string = "Yes";
  valRadio3: string = "No";
  valRadio4: string = "No";
  valRadio5: string = "No";
  valRadio6: string = "No";
  valRadio7: string = "No";
  valRadio8: string = "No";
  valRadio9: string = "No";
  valRadio10: string = "No";
  valRadio11: string = "No";
  valRadio12: string = "No";
  constructor() { }

  ngOnInit(): void {
  }

}
