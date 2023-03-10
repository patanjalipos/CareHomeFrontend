import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CareService } from 'src/app/ui/service/CareServices';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent implements OnInit {
mode:string='view';
allergies:string=null;
lstallergies:any[]=[];
constructor(
  private careService: CareService,
) { }

  async ngOnInit(): Promise<void> {
    const data$ = this.careService.getAllergiesList();
    this.lstallergies = await lastValueFrom(data$);
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
