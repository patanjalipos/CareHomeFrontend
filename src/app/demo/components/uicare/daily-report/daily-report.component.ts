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
  constructor(private datePipe: DatePipe,) { 
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
    
  }
}
