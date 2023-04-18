import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CareService } from 'src/app/ui/service/CareServices';
@Component({
  selector: 'app-clinical-information',
  templateUrl: './clinical-information.component.html',
  styleUrls: ['./clinical-information.component.scss']
})
export class ClinicalInformationComponent implements OnInit {
  mode:string='view';
  clinicalinformation:any = <any>{};
  constructor(private careService: CareService,) { 
    
  }

  async ngOnInit(): Promise<void> {
    this.clinicalinformation = {
      'CoronaVirus':'Does not have Coronavirus (COVID-19)',
      'Diet' :'Macrobiotic,Semi-vegetarian,Lactovegetarian,Vegan',
      'Diagnosis':'Chlamydia,Cyclosporiasis',
      'OtherInfo':'no'
    }
    //const data$ = this.careService.getAllergiesList();
    //this.lstResidentIndicators = await lastValueFrom(data$);
    //console.log('lstallergies', this.lstallergies);    
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