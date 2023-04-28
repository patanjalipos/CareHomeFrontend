import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { ConstantsService, CustomDateFormat, UserTypes } from 'src/app/ui/service/constants.service';
import { MasterService } from '../master.service';
import { ViewportScroller } from '@angular/common';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';

@Component({
  selector: 'app-resident-master',
  templateUrl: './resident-master.component.html',
  styleUrls: ['./resident-master.component.scss']
})

export class ResidentMasterComponent extends AppComponentBase implements OnInit {  
  @ViewChild('myForm') public myForm: NgForm;
  @ViewChild('dt') public dataTable: Table;
  @ViewChild('filtr') filtr: ElementRef;
  UserTypes = UserTypes;
  customDateFormat = CustomDateFormat;
  s_userTypeId: any = localStorage.getItem('userTypeId');
  todayDate = new Date();
  mode: string = null;
  lstHomeMaster: any[]=[];
  lstCountryMaster: any[]=[];
  lstDependencyMaster: any[]=[];
  lstRoomMaster: any[]=[];
  lstResidentMaster: any[]=[];
  lstResidentIndicator: any[]=[];
  public ResidentMaster: any = <any>{};
  public ResidentBookingDetails: any = <any>{};
  selectedUserType: any[]=[];
  filteredValuesLength:number=0;
  stlsttitle: any[];
  stlstgender: any[];
  stlstmaritalstatus: any[];
  stlststatus: any[]=[];
  SelectedFile:any[]=[];
  profileSrc = null;
  ResidentMasterId = null;
  //funding
  stlstfunding: any[];
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };
  constructor(
    private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,   
    private viewportScroller: ViewportScroller,
    private ngWizardService: NgWizardService
  ) 
  {
    super();
    this._ConstantServices.ActiveMenuName = "Resident Master"; 
    this.stlsttitle = [
      { name: 'Mr.', code: 'Mr.' },
      { name: 'Mrs.', code: 'Mrs.' },
      { name: 'Ms.', code: 'Ms.' },
      { name: 'Master', code: 'Master' }
    ];
    this.stlstgender = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
      { name: 'Other', code: 'Other' }
    ];
    this.stlstmaritalstatus = [
      { name: 'Married', code: 'Married' },
      { name: 'Unmaaried', code: 'Unmaaried' },
      { name: 'Widow', code: 'Widow' },
      { name: 'Divoreced', code: 'Divoreced' }
    ]
    this.stlststatus = [
      { name: 'Active', code: 1 },
      { name: 'Inactive', code: 0 }
    ];
    this.lstDependencyMaster = [
      { name: 'Residenttial indenpendent', code: 'Residenttial indenpendent' },
      { name: 'Residenttial some assistance', code: 'Residenttial some assistance' },
      { name: 'Residenttial full assistance', code: 'Residenttial full assistance' },
      { name: 'Dementia', code: 'Dementia' },
      { name: 'Nursing', code: 'Nursing' },
      { name: 'End of life', code: 'End of life' }
    ];
    this.lstRoomMaster = [
      { name: '302', code: '302' },
      { name: '303', code: '303' },
      { name: '305', code: '305' },
    ];
    this.stlstfunding = [
      { name: 'Continuing NHS', code: 'Continuing NHS' },
      { name: 'Private', code: 'Private' },
      { name: 'Responsible Local Authority', code: 'Responsible Local Authority' },
      { name: 'Private/Responsible Local Authority', code: 'Private/Responsible Local Authority' }
    ];
    this.profileSrc = this._ConstantServices.BaseURIFileServer + 'ProfileImage/';
   }

  ngOnInit(): void {
    if (UserTypes.SuperAdmin === this.s_userTypeId) {
      this.LoadHomeMaster();
    }
    this.LoadHomeMaster();
    this.LoadCountryList();
    this.LoadResidentList();
  }


  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }


  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
  LoadHomeMaster() {
    this._UtilityService.showSpinner();
    this.unsubscribe.add = this._MasterServices.GetHomeMaster()
      .subscribe
      ({
        next:(data) => {
          this._UtilityService.hideSpinner();
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.lstHomeMaster = tdata;  
            console.log('lstHomeMaster',this.lstHomeMaster)          
          }
          else {
            this.lstHomeMaster = [];            
          }
        },
        error: (e) => {
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }  
  LoadCountryList() {
    this.unsubscribe.add = this._MasterServices.GetCountryMaster().subscribe({
      next: (data) => {
        if (data.actionResult.success == true) {
          var tdata = JSON.parse(data.actionResult.result);
          tdata = tdata ? tdata : [];
          this.lstCountryMaster = tdata;
        }
      },
      error: (e) => {
        this._UtilityService.hideSpinner();
        this._UtilityService.showErrorAlert(e.message);
      },
    });
  }
  LoadResidentList() {
    var HomeMasterId = "";
    if (this.s_userTypeId != UserTypes.SuperAdmin) {
      HomeMasterId = localStorage.getItem('HomeMasterId');
    }
    this._UtilityService.showSpinner();   
    this.unsubscribe.add = this._MasterServices.GetResidentMaster(HomeMasterId,false)
      .subscribe({
        next:(data) => {
          this._UtilityService.hideSpinner();          
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.lstResidentMaster = tdata;
            if (this.filtr !== undefined) {
              this.filtr.nativeElement.value = "";
              this.dataTable.reset();
              this.filteredValuesLength = this.lstResidentMaster?.length;
              }            
          //  console.log(this.lstResidentMaster);
          }
          else {
            this.lstResidentMaster = [];            
          }
        },
        error: (e) => {
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }
  AddResident()
  {
    this.mode = "add";
    this.ResidentMasterId = null;
    this.SelectedFile = [];
    this.ResidentMaster = <any>{};    
    this.ResidentMaster.Status = 1;   
    if (UserTypes.SuperAdmin !== this.s_userTypeId) {
      this.ResidentMaster.HomeMasterId = localStorage.getItem('HomeMasterId');
    } 
  }
  LoadResidentDetails(id)
  {
    this.SelectedFile = [];
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
            if(this.ResidentMaster?.DateOfBirth!=null && this.ResidentMaster?.DateOfBirth!=undefined)
            {
              this.ResidentMaster.DateOfBirth = new Date(this.ResidentMaster.DateOfBirth);
            }
            this.mode = "update";            
          }

        },
        error: (e) => {
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }
  fileUploader(event) {
    this.SelectedFile = [];
    for (let file of event.files) {
      this.SelectedFile.push(file);
    }
}
fileUploaderReset()
{
  this.SelectedFile = [];
}
RemoveProfileImage(){
  this.ResidentMaster.ProfileImage=null;
  this.SelectedFile = [];
}
  Submit()
  {
    this.ResidentMaster.CreatedBy = localStorage.getItem('userId');  
    this.ResidentMaster.ModifiedBy = localStorage.getItem('userId');  
    console.log('ResidentMaster',this.ResidentMaster);
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.ResidentMaster));
    if(this.SelectedFile?.length > 0){
      for (let file of this.SelectedFile) {
        formData.append('files[]', file);
      }
    }
    this._UtilityService.showSpinner();
    this.unsubscribe.add = this._MasterServices.AddUpdateResidentMaster(formData)
        .subscribe
        ({
          next:(data) => {
            this._UtilityService.hideSpinner();
            this.LoadResidentList();
            this._UtilityService.showSuccessAlert(data.actionResult.errMsg);
            this.ResidentMasterId = data.actionResult.stringVal
            console.log('actionResult',data.actionResult);
            //this.mode = null;            
          },
          error: (e) => {
            this._UtilityService.hideSpinner();
            this._UtilityService.showErrorAlert(e.message);
          },
        });
  }
  SubmitAdmissionForm(){
    this.ResidentBookingDetails.CreatedBy = localStorage.getItem('userId');  
    this.ResidentBookingDetails.ModifiedBy = localStorage.getItem('userId'); 
    this.ResidentBookingDetails.ResidentMasterId = this.ResidentMasterId; 
    this._UtilityService.showSpinner();
    this.unsubscribe.add = this._MasterServices.AddUpdateResidentBookingDetails(this.ResidentBookingDetails)
        .subscribe
        ({
          next:(data) => {
            this._UtilityService.hideSpinner();
            this.LoadResidentList();
            this._UtilityService.showSuccessAlert(data.actionResult.errMsg);
            console.log('actionResult',data.actionResult);
            this.mode = null;          
          },
          error: (e) => {
            this._UtilityService.hideSpinner();
            this._UtilityService.showErrorAlert(e.message);
          },
        });
  }
  CloseModal() {
    this.mode = null;
    this.ResidentMasterId = null;
  }
  exportToItemExcel() {
    let importData: any = <any>{};
    importData.reportname = "residentlist";
    importData.filename = "residentlist";
    this._MasterServices.downloadReport(importData);
  } 
  //Filter
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Functions
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress1(event: any) {
    const pattern = /[A-Za-z\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 32 && event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }



  

}


