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
  lstResidentIndicatorGroups:any[]=[];
  stlststatus:any[]=[];
  constructor(private careService: CareService,) { 
    this.stlststatus = [
      { name: 'All', code: null },
      { name: 'Enabled', code: 'Enabled' },
      { name: 'Disabled', code: 'Disabled' }
    ];
  }

  async ngOnInit(): Promise<void> {
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
   
  }

}
