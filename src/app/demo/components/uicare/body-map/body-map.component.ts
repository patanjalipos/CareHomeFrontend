import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { BodyMapDetails } from 'src/app/demo/classes/BodyMapDetails';
import { DailyReportDetails } from 'src/app/demo/classes/DailyReportDetails';

@Component({
  selector: 'app-body-map',
  templateUrl: './body-map.component.html',
  styleUrls: ['./body-map.component.scss']
})
export class BodyMapComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  lstBodyMap:BodyMapDetails[]=[];
  BodyMapObj: BodyMapDetails = <BodyMapDetails>{};
  BodyMapDialog: boolean;
  constructor() {
    this.lstBodyMap.push({
      "CaptureDate":new Date("2022-11-07 10:11"),
      "BloodGlucose":"99",
      "BloodPressure":"120/80",
      "BodyTemprature":"98.7",
      "Pulse":"72",
      "RespiratoryRate":"13",
      "Saturation":"98%",
      "Weight":"75",
      "Height":"172",
      "BMI":"26.4",
      "CaptureBy":"Admin"
      },
      {
        "CaptureDate":new Date("2022-11-07 10:11"),
        "BloodGlucose":"99",
        "BloodPressure":"140/100",
        "BodyTemprature":"101.2",
        "Pulse":"80",
        "RespiratoryRate":"15",
        "Saturation":"85%",
        "Weight":"60",
        "Height":"165",
        "BMI":"22",
        "CaptureBy":"Kartik"
      });
   }

  ngOnInit(): void {
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  editBodyMap(cc)
  {

  }
  deleteBodymap(cc){ 

  }
  CalculateBMI(){
    var squareofheight = (Number(this.BodyMapObj.Height) / 100 * Number(this.BodyMapObj.Height) / 100);
    var BMI = Number(this.BodyMapObj.Weight) / squareofheight;
    this.BodyMapObj.BMI = BMI.toFixed(2);
  }
  saveBodyMapDetails()
  {
      this.lstBodyMap.push({
        "CaptureDate":new Date(),
        "BloodGlucose":this.BodyMapObj.BloodGlucose,
        "BloodPressure":this.BodyMapObj.BloodPressure,
        "BodyTemprature":this.BodyMapObj.BodyTemprature,
        "Pulse":this.BodyMapObj.Pulse,
        "RespiratoryRate":this.BodyMapObj.RespiratoryRate,
        "Saturation":this.BodyMapObj.Saturation,
        "Weight":this.BodyMapObj.Weight,
        "Height":this.BodyMapObj.Height,
        "BMI":this.BodyMapObj.BMI,
        "CaptureBy":this.BodyMapObj.CaptureBy,
        });

        this.BodyMapObj=<BodyMapDetails>{};
        this.BodyMapDialog=false;
        alert("Daily Body Map Details Saved Successfully");
  }
}
