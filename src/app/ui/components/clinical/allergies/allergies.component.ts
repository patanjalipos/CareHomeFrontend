import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConstantsService, CustomDateFormat, UserTypes } from 'src/app/ui/service/constants.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';
import { lastValueFrom } from 'rxjs';
import { MasterService } from '../../master/master.service';
import { CareService } from 'src/app/ui/service/CareServices';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent extends AppComponentBase implements OnInit {
@Input() mode:string='view';
@Input() userid:any=null;
@Input() admissionid:any=null;
loginId:any=localStorage.getItem('userId');
public Clinical: any = <any>{};
allergies:string=null;
lstallergies:any[]=[];
stlstUnknownAllergies:any[]=[];
stlstStatus:any[]=[];
status:string="All";
showcolumn:string="Created";
extraItemRowCounter: number = 0;
public lstExtraItemDetails: any[] = [];
constructor(
  private _ConstantServices: ConstantsService,
  private _MasterServices:MasterService,
  private _UtilityService: UtilityService, 
  private careService: CareService,
 
) {
  super();
  this.stlstUnknownAllergies = [
    { name: 'The resident has no known allergies / adverse reactions', code: 'The resident has no known allergies / adverse reactions' },
    { name: 'The resident has not been asked about any known allergies/adverse reactions', code: 'The resident has not been asked about any known allergies/adverse reactions' },
    { name: 'It is unknown if the resident has any known allergies/adverse reactions', code: 'It is unknown if the resident has any known allergies/adverse reactions' }    
  ];
  this.stlstStatus = [
    { name: 'All', code: 'All' },
    { name: 'Active', code: 'Active' },
    { name: 'Closed', code: 'Closed' }
  ];
 }

  // async ngOnInit(): Promise<void> {
  //   //const data$ = this.careService.getAllergiesList();
  //   //this.lstallergies = await lastValueFrom(data$);
  //   //console.log('lstallergies', this.lstallergies);    
  // }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {  
    
  }

  edit()
  {
    this.mode='edit';
    if (this.userid != null && this.admissionid != null) {
      this.GetClinicalAllergiesById(this.admissionid);      
    }
    else
    {
      this._UtilityService.showWarningAlert("Resident admission details are missing.");
    }
  }
  AddNewAllergy()
  {
    this.extraItemRowCounter = this.extraItemRowCounter + 1;
    this.lstExtraItemDetails.push({      
      Sequence: this.extraItemRowCounter,
      mode:'add',
      allergen: "",
      reaction: "",
      status: 1,
      createdby: this.loginId,
      createdon: new Date(),
      modifiedby: null,
      modifiedon:null,

    }
    );
  }
  RemoveExtraItemDetails(Sequence: number) {    
      this.lstExtraItemDetails = this.lstExtraItemDetails.filter((item) => item.Sequence !== Sequence);  
  }
  // ResetItem(Sequence:number)
  // {
    
  //   this.lstExtraItemDetails[Sequence-1].allergen="";
  //   this.lstExtraItemDetails[Sequence-1].reaction="";
  //   this.lstExtraItemDetails[Sequence-1].status = 1;
  //   this.lstExtraItemDetails[Sequence-1].createdby=this.loginId;
  //   this.lstExtraItemDetails[Sequence-1].createdon=new Date();
  //   this.lstExtraItemDetails[Sequence-1].modifiedby = null;
  //   this.lstExtraItemDetails[Sequence-1].modifiedon = null;    
    
  // }
  GetClinicalAllergiesById(admissionid) {
    this.Clinical.StatementType = "Insert";
    this._UtilityService.showSpinner();   
    this.unsubscribe.add = this._MasterServices.GetClinicalAllergiesById(admissionid)  
      .subscribe({
        next:(data) => {
          this._UtilityService.hideSpinner();          
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.Clinical = tdata;            
            this.Clinical.StatementType = "Update";
          }
        },
        error: (e) => {
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }  
  save()
  {
    if (this.userid != null && this.admissionid != null) {      
      this.Clinical.userid = this.userid;
      this.Clinical.residentadmissioninfoid = this.admissionid;
      this.Clinical.modifiedby = this.loginId;
      this._UtilityService.showSpinner();
      this.unsubscribe.add = this._MasterServices.AddInsertUpdateClinicalAllergies(this.Clinical)
        .subscribe
        ({
          next: (data) => {
            this._UtilityService.hideSpinner();
            this._UtilityService.showSuccessAlert(data.actionResult.errMsg);
            this.mode = 'view'
          },
          error: (e) => {
            this._UtilityService.hideSpinner();
            this._UtilityService.showErrorAlert(e.message);
          },
        });
    }
    else
    {
      this._UtilityService.showWarningAlert("Resident admission details are missing.");
    }
  }
  close()
  {
    this.mode='view'
  }
  
}
