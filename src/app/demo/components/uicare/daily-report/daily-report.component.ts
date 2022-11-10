import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DailyReportDetails } from 'src/app/demo/classes/DailyReportDetails';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  lstDailyReport:DailyReportDetails[]=[];
  DailyReportObj:DailyReportDetails=<DailyReportDetails>{};
  DailyReportDialog:Boolean=false;
  lstReportCatg:any[]=[];
  lstHandover:any[]=[];
  
  constructor(private datePipe: DatePipe,) { 

    this.lstReportCatg.push({"CategoryName":"General"});
    this.lstReportCatg.push({"CategoryName":"Cretical"});

    this.lstHandover.push({"HandoverName":"Yes"});
    this.lstHandover.push({"HandoverName":"No"});

    this.lstDailyReport.push({
      "CaptureDate":new Date("2022-11-07 10:11"),
      "Category":"General",
      "DailyReport":"Sean had a settled night",
      "Mood":"",
      "Handover":"No",
      "StartTime":null,
      "EndTime":null,
      "CreatedBy":"Jhon Thomas",
      "CreatedDate":new Date("2022-11-07 10:11"),
      "UpdatedBy":"Jhon Thomas",
      "UpdatedDate":new Date("2022-11-07 10:11")
      },
      {
        "CaptureDate":new Date("2022-11-08 10:11"),
        "Category":"General",
        "DailyReport":"Sean had a settled night",
        "Mood":"",
        "Handover":"No",
        "StartTime":null,
        "EndTime":null,
        "CreatedBy":"Jhon Thomas",
        "CreatedDate":new Date("2022-11-08 10:11"),
        "UpdatedBy":"Jhon Thomas",
        "UpdatedDate":new Date("2022-11-08 10:11")
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
  editProduct(cc)
  {

  }
  deleteProduct(cc)
  {

  }
  openNewReport()
  {
      this.DailyReportObj=<DailyReportDetails>{};
      this.DailyReportDialog=true;
  }
  saveDailyReport()
  {
      this.lstDailyReport.push({
        "CaptureDate":new Date(this.DailyReportObj.CaptureDate),
        "Category":this.DailyReportObj.Category,
        "DailyReport":this.DailyReportObj.DailyReport,
        "Mood":this.DailyReportObj.Mood,
        "Handover":this.DailyReportObj.Handover,
        "StartTime":this.DailyReportObj.StartTime,
        "EndTime":this.DailyReportObj.EndTime,
        "CreatedBy":this.DailyReportObj.CreatedBy,
        "CreatedDate":new Date(),
        "UpdatedBy":this.DailyReportObj.CreatedBy,
        "UpdatedDate":new Date()
        });

        this.DailyReportObj=<DailyReportDetails>{};
        this.DailyReportDialog=false;
        alert("Daily Report Saved Successfully");
  }   
  hideDialog()
  {
    this.DailyReportDialog=false;
  }
}
