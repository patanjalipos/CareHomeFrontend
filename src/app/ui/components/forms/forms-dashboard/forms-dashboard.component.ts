import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-forms-dashboard',
    templateUrl: './forms-dashboard.component.html',
    styleUrls: ['./forms-dashboard.component.scss'],
})
export class FormsDashboardComponent extends AppComponentBase implements OnInit {

    stlststatus: any[] = [];
    public lstMaster: any[]=[];
    rangeDates: Date[] | undefined;

    selectedStatus: number;
    selectedFormType:string;
    
    constructor(private _ConstantServices: ConstantsService,
        private _MasterServices:MasterService,
        private _UtilityService: UtilityService,    
      ) 
      {
        super();
        this._ConstantServices.ActiveMenuName = "Form Master"; 
        this.stlststatus = [
          { name: 'Active', code: 1 },
          { name: 'Inactive', code: 0 }
        ];    
      }

    ngOnInit() { this.GetformMaster()}

    GetformMaster(){
        this._UtilityService.showSpinner();   
        this.unsubscribe.add = this._MasterServices.GetFormMaster(true)
          .subscribe({
            next:(data) => {
              this._UtilityService.hideSpinner();          
              if (data.actionResult.success == true) {
                var tdata = JSON.parse(data.actionResult.result);
                //console.log(tdata);
                tdata = tdata ? tdata : [];
                this.lstMaster = tdata;
              }
              else {
                this.lstMaster = [];            
              }
            },
            error: (e) => {
              this._UtilityService.hideSpinner();
              this._UtilityService.showErrorAlert(e.message);
            },
          });
      }
}
