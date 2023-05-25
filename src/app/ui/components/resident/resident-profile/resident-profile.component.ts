import { Component, OnInit } from '@angular/core';
import { ConstantsService, CustomDateFormat } from 'src/app/ui/service/constants.service';
import { MasterService } from '../../master/master.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resident-profile',
  templateUrl: './resident-profile.component.html',
  styleUrls: ['./resident-profile.component.scss']
})
export class ResidentProfileComponent extends AppComponentBase implements OnInit {
  customDateFormat = CustomDateFormat;
  selecteduserid:any= null; //"3325faff-558d-4067-9c56-02e78dd06b26";
  selectedadmissionid:any= null; //"a24a3830-1b5e-4ce7-a8cd-df6de925ffa9";
  healthcareMode:string="view";
  public ResidentMaster: any = <any>{};
  profileUrl:string=this._ConstantServices.BaseURIFileServer + 'ProfileImage/';
  constructor(
    private route: ActivatedRoute,
    private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,  
  ) {
    super();
    this._ConstantServices.ActiveMenuName="User Profile";
    this.unsubscribe.add = this.route.queryParams.subscribe(params => {
      var ParamsArray=this._ConstantServices.GetParmasVal(params['q']);
      if(ParamsArray?.length>0)
      {
        //console.log('ParamsArray',ParamsArray);
        this.healthcareMode = ParamsArray.find(e=>e.FieldStr=='mode')?.FieldVal || 'view';
        this.selecteduserid = ParamsArray.find(e=>e.FieldStr=='id')?.FieldVal || null;
        this.selectedadmissionid = ParamsArray.find(e=>e.FieldStr=='admissionid')?.FieldVal || null;
      }      
    });
   }

  ngOnInit(): void {
    if(this.selecteduserid!=null)
    this.LoadResidentDetails(this.selecteduserid);
  }

  LoadResidentDetails(id)
  {
    this.selecteduserid=id;
    this._UtilityService.showSpinner();
    this.unsubscribe.add = this._MasterServices.GetResidentMasterById(id)
      .subscribe
      ({
        next:(data) => {
          this._UtilityService.hideSpinner();
          if (data.actionResult.success == true) 
          {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.ResidentMaster = tdata;
            console.log('this.ResidentMaster', this.ResidentMaster);           
                   
          }

        },
        error: (e) => {
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }
  calculateAge(birthday):number {    
    if (birthday != undefined) {
       var curdate = new Date();
       var dob = new Date(birthday);
       var ageyear = curdate.getFullYear() - dob.getFullYear();
       var agemonth = curdate.getMonth() - dob.getMonth();
       var ageday = curdate.getDate() - dob.getDate();
       if (agemonth <= 0) {
         ageyear--;
         agemonth = (12 + agemonth);
       }
       if (curdate.getDate() < dob.getDate()) {
         agemonth--;
         ageday = 30 + ageday;
       } if (agemonth == 12) {
         ageyear = ageyear + 1;
         agemonth = 0;
       }
       return ageyear;      
     }
     else
     return 0;
   }

}
