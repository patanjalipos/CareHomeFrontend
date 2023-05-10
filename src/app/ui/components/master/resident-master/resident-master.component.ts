import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { AdmissionStatus, ConstantsService, CustomDateFormat, UserTypes } from 'src/app/ui/service/constants.service';
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
  admissionStatus = AdmissionStatus;
  customDateFormat = CustomDateFormat;
  s_userTypeId: any = localStorage.getItem('userTypeId');
  selecteduserid:any=null;
  selectedadmissionid:any=null;
  todayDate = new Date();
  mode: string = null;
  lstHomeMaster: any[]=[];
  lstCountryMaster: any[]=[];
  lstDependencyMaster: any[]=[];
  lstRoomMaster: any[]=[];
  lstResidentMaster: any[]=[];
  lstResidentIndicator: any[]=[];
  public ResidentMaster: any = <any>{};
  selectedUserType: any[]=[];
  filteredValuesLength:number=0;
  stlsttitle: any[];
  stlstgender: any[];
  stlstmyself: any[];
  stlstmaritalstatus: any[];
  stlstadmissionstatus: any[];
  stlststatus: any[]=[];
  SelectedFile:any[]=[];
  profileSrc = null;  
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

  healthcareMode:string="";

  constructor(
    private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,   
    private viewportScroller: ViewportScroller,
    private ngWizardService: NgWizardService,
  ) 
  {
    super();
    this._ConstantServices.ActiveMenuName = "Resident Master"; 
    this.stlstadmissionstatus = [
      { name: this.admissionStatus[this.admissionStatus.Active], code: this.admissionStatus.Active },
      { name: this.admissionStatus[this.admissionStatus.Deceased], code: this.admissionStatus.Deceased },
      { name: this.admissionStatus[this.admissionStatus.Discharged], code: this.admissionStatus.Discharged },
      { name: this.admissionStatus[this.admissionStatus.Transferred], code: this.admissionStatus.Transferred },
      { name: this.admissionStatus[this.admissionStatus.WaitListed], code: this.admissionStatus.WaitListed },
      { name: this.admissionStatus[this.admissionStatus.Suspended], code: this.admissionStatus.Suspended },
      { name: this.admissionStatus[this.admissionStatus.Unallocated], code: this.admissionStatus.Unallocated }
    ];
    this.stlsttitle = [
      { name: 'Mr', code: 'Mr' },
      { name: 'Mrs', code: 'Mrs' },
      { name: 'Ms', code: 'Ms' },
      { name: 'Miss', code: 'Miss' },
      { name: 'Other', code: 'Other' }
    ];
    this.stlstgender = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
      { name: 'Intersex or indeterminate', code: 'Intersex or indeterminate' },
      { name: 'Not stated / inadequately described', code: 'Not stated / inadequately described' }
    ];
    this.stlstmyself = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
      { name: 'Lesbian', code: 'Lesbian' },
      { name: 'Gay', code: 'Gay' },
      { name: 'Bi-sexual', code: 'Bi-sexual' },
      { name: 'Transgender', code: 'Transgender' },
      { name: 'Intersex', code: 'Intersex' },
      { name: 'Other', code: 'Other' }
    ];
    this.stlstmaritalstatus = [
      { name: 'Unknown', code: 'Unknown' },
      { name: 'Single', code: 'Single' },
      { name: 'Married', code: 'Married' },
      { name: 'Widowed', code: 'Widowed' },
      { name: 'Divoreced', code: 'Divoreced' },
      { name: 'Separated', code: 'Separated' },
    ]
    this.stlststatus = [
      { name: 'Active', code: true },
      { name: 'Inactive', code: false }
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
    this.healthcareMode="view";
    this.selecteduserid = null;
    this.selectedadmissionid = null;
    this.SelectedFile = [];
    this.ResidentMaster = <any>{};    
    this.ResidentMaster.admissionstatus = this.admissionStatus.Active;   
    this.ResidentMaster.status = true;  
    if (UserTypes.SuperAdmin !== this.s_userTypeId) {
      this.ResidentMaster.homemasterid = localStorage.getItem('HomeMasterId');
    } 
  }
  LoadResidentDetails(id, admissionid)
  {
    this.selecteduserid=id;
    this.selectedadmissionid=admissionid;
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
            //console.log('this.ResidentMaster', this.ResidentMaster)
            if(this.ResidentMaster?.dateofbirth!=null && this.ResidentMaster?.dateofbirth!=undefined)
            {
              this.ResidentMaster.dateofbirth = new Date(this.ResidentMaster.dateofbirth);
            }
            this.mode = "edit";   
            this.healthcareMode="view";         
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
  this.ResidentMaster.profileimage=null;
  this.SelectedFile = [];
}

  edit()
  {
    this.mode='edit';
  }
  
  Submit()
  {
    this.ResidentMaster.userid=this.selecteduserid;
    this.ResidentMaster.residentadmissioninfoid=this.selectedadmissionid;          
    this.ResidentMaster.usertypeid=this.UserTypes.Resident;
    this.ResidentMaster.modifiedby = localStorage.getItem('userId');  
    console.log('ResidentMaster',this.ResidentMaster);
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.ResidentMaster));
    if(this.SelectedFile?.length > 0){
      for (let file of this.SelectedFile) {
        formData.append('files[]', file);
      }
    }
    this._UtilityService.showSpinner();
    this.unsubscribe.add = this._MasterServices.AddInsertUpdateResidentMaster(formData)
        .subscribe
        ({
          next:(data) => {
            this._UtilityService.hideSpinner();
            //this.LoadResidentList();
            this._UtilityService.showSuccessAlert(data.actionResult.errMsg);
            this.selecteduserid = data.actionResult.userId;
            this.selectedadmissionid = data.actionResult.stringVal;           
                       
          },
          error: (e) => {
            this._UtilityService.hideSpinner();
            this._UtilityService.showErrorAlert(e.message);
          },
        });
  }
  
  CloseModal() {
    this.mode = null;
    this.healthcareMode="";
    this.selecteduserid = null;
    this.selectedadmissionid = null;
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
}


