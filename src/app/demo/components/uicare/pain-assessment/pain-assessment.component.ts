import { Options } from '@angular-slider/ngx-slider';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { PrescriptionTemplatePainAssesmentdata } from 'src/app/demo/classes/ToDoList';

@Component({
  selector: 'app-pain-assessment',
  templateUrl: './pain-assessment.component.html',
  styleUrls: ['./pain-assessment.component.scss']
})
export class PainAssessmentComponent implements OnInit {
  value: number = 5;
  public PrescriptionTemplatePainAssesmentdata: PrescriptionTemplatePainAssesmentdata = <PrescriptionTemplatePainAssesmentdata>{};
  public lstPrescriptionTemplatePainAssesmentdata: any[] = []
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: "Pain Free" },
      { value: 1, legend: "Very Mild" },
      { value: 2, legend: "Discomforting" },
      { value: 3, legend: "Tolerable" },
      { value: 4, legend: "Distressing" },
      { value: 5, legend: "Very Distressing" },
      { value: 6, legend: "Intense" },
      { value: 7, legend: "Very Intense" },
      { value: 8, legend: "Horrible" },
      { value: 9, legend: "Excruciating Unbearable" },
      { value: 10, legend: "Unbearable" }
    ],
    getTickColor: function (value) {

      if (value <= 1) return 'green';
      if (value >= 2 && value <= 3) return 'yellow';
      if (value >= 4 && value <= 5) return 'blue';
      if (value >= 6 && value <= 8) return 'orange';
      if (value >= 9) return 'red';
      return '#2AE02A';
    },
  };
  constructor(private cdRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
  }
  AddPainData() {

    var ObjectID = 4;   //require("bson-objectid");
    var jsonObject = {
      'PrescriptionPainDetailsId':  ObjectID.toString(), //ObjectID().toString(),
      'CaptureDate': new Date(),
      'Rating': this.PrescriptionTemplatePainAssesmentdata.Rating,
      'IsFromserver': false
    };

    this.lstPrescriptionTemplatePainAssesmentdata = this.lstPrescriptionTemplatePainAssesmentdata.filter(x => x.IsFromserver == true);

    this.lstPrescriptionTemplatePainAssesmentdata.unshift(jsonObject);

    this.cdRef.detectChanges();
  }
  // Pain Assesment Data
  deletePainData(id) {
    if (window.confirm('Are sure you want to delete this rating ?')) {
      this.lstPrescriptionTemplatePainAssesmentdata = this.lstPrescriptionTemplatePainAssesmentdata.filter(e => e.PrescriptionPainDetailsId !== id);
    }
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
