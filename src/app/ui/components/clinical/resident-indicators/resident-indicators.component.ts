import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CareService } from 'src/app/ui/service/CareServices';

@Component({
  selector: 'app-resident-indicators',
  templateUrl: './resident-indicators.component.html',
  styleUrls: ['./resident-indicators.component.scss']
})
export class ResidentIndicatorsComponent implements OnInit {
  mode:string='view';
  status:string='Enabled';
  lstResidentIndicators:any[]=[];
  AddResidentIndicators:any[]=[];
  lstResidentIndicatorGroups:any[]=[];
  stlststatus:any[]=[];
  stlstIsEnabled:any[]=[];
  IndicatorName:any[]=[];
  lstBankDepositTransactionDetails:any[]=[];
  ResidentIndicators:number=0;
  constructor(private careService: CareService,) { 
    this.stlststatus = [
      { name: 'All', code: null },
      { name: 'Enabled', code: 'Enabled' },
      { name: 'Disabled', code: 'Disabled' }
    ];
    this.stlstIsEnabled = [
      { name: 'Enabled', code: 'Enabled' },
      { name: 'Disabled', code: 'Disabled' }
    ];
    this.stlstIsEnabled = [
      { name: 'Enabled', code: 'Enabled' },
      { name: 'Disabled', code: 'Disabled' }
    ];
  }

  async ngOnInit(): Promise<void> {
    const data$ = this.careService.getResidentIndicatorList();
    this.lstResidentIndicators = await lastValueFrom(data$);
    console.log('lstResidentIndicators', this.lstResidentIndicators);    
  }
  edit()
  {
    this.mode='edit'
    this.AddResidentIndicators = [];
    this.ResidentIndicators = 0;
    this.AddBankTransactionDetails();
  }
  close()
  {
    this.mode='view'
  }
  save()
  {
    this.lstResidentIndicators = this.AddResidentIndicators.filter(e=>e.IndicatorName!='');
    this.mode='view'
  }
  AddBankTransactionDetails()
  {
    this.ResidentIndicators++;
    this.AddResidentIndicators.push({"Sequence":this.ResidentIndicators,"IndicatorName":"","IndicatorGroupName":"","IsEnabled":"","IsVisible":""});
    console.log(this.AddResidentIndicators)
  }
  RemoveBankTransactionDetails(Sequence)
  {
    this.AddResidentIndicators = this.AddResidentIndicators.filter(e=>e.Sequence!==Sequence);
    this.ResidentIndicators--;
    console.log(this.AddResidentIndicators)
  }
  async filterResidentIndicators(){
    const data$ = this.careService.getResidentIndicatorList();
    this.lstResidentIndicators = await lastValueFrom(data$);
    this.lstResidentIndicators = this.lstResidentIndicators.filter(e=>e.IsEnabled==this.status)
  }
}
