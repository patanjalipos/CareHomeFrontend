import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-assessment',
  templateUrl: './daily-assessment.component.html',
  styleUrls: ['./daily-assessment.component.scss']
})
export class DailyAssessmentComponent implements OnInit {
  date1: Date;
  valRadio1: string = "No";
  tblAssessmentHistory: any[] = [];
  ReviewDate: Date =new Date();
  NextReviewDate: Date =new Date();
  constructor() { }

  ngOnInit(): void {
  }

  AddDailyAssess(){
    var jsonObject = {
      "AssessmentDate": this.ReviewDate,
      "NextReviewDate": this.NextReviewDate,
      "Assessment":"Medications that the patient is currently taking",
      "Outcomes":"Improvement",
      "Involved":"Involved",
      "UpdatedBy": "Admin",
      "UpdatedDate": new Date(),
  
    }
    this.tblAssessmentHistory.push(jsonObject);
  }
  LoadAssessById(id){

  }
}
