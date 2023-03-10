import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { FallRiskAssessmentList } from 'src/app/ui/classes/FallRiskAssessmentList';
import { CareService } from 'src/app/ui/service/CareServices';

@Component({
  selector: 'app-fall-risk-assessment-report',
  templateUrl: './fall-risk-assessment-report.component.html',
  styleUrls: ['./fall-risk-assessment-report.component.scss']
})
export class FallRiskAssessmentReportComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  lstFallRiskAssessment: FallRiskAssessmentList[]=[];
  public statusColor: string[]=[];
  constructor(private careService: CareService,) 
  {  
    //this.lstFallRiskAssessment=this.careService.getFallRiskAssessmentList().toPromise();
    //this.careService.getFallRiskAssessmentList().then(data => this.lstFallRiskAssessment = data);
  }

  async ngOnInit(): Promise<void> {
    const categories$ = this.careService.getFallRiskAssessmentList();
    this.lstFallRiskAssessment = await lastValueFrom(categories$);
    console.log('lstFallRiskAssessment', this.lstFallRiskAssessment);
   this.getTickColor();
  }

  getTickColor() {
    for (let i = 0; i < this.lstFallRiskAssessment?.length; i++) {
      if (this.lstFallRiskAssessment[i].status === "LOW")
        this.statusColor[i] = '#006400';
      else if (this.lstFallRiskAssessment[i].status === "MODERATE")
        this.statusColor[i] = '#3CB371';
      else if (this.lstFallRiskAssessment[i].status === "AT RISK")
        this.statusColor[i] = 'yellow';
      else 
        this.statusColor[i] = 'red';
      console.log(this.statusColor[i]);
    }       
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
