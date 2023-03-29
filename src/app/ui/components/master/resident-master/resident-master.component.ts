import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ConstantsService, CustomDateFormat, UserTypes } from 'src/app/ui/service/constants.service';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-resident-master',
  templateUrl: './resident-master.component.html',
  styleUrls: ['./resident-master.component.scss']
})
export class ResidentMasterComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('myForm') public myForm: NgForm;
  @ViewChild('dt') public dataTable: Table;
  @ViewChild('filtr') filtr: ElementRef;
  UserTypes = UserTypes;
  customDateFormat = CustomDateFormat;
  UserTypeCurre: string = localStorage.getItem('userTypeId');
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
  constructor(
    private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private messageService: MessageService,   
  ) {
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
    if (UserTypes.SuperAdmin === localStorage.getItem('userTypeId')) {
      this.LoadHomeMaster();
    }
    this.LoadHomeMaster();
    this.LoadCountryList();
    this.LoadResidentList();
  }
  LoadHomeMaster() {
    this.blockUI.start("Please Wait.....");
    this._MasterServices.GetAllHomeMasterList()
      .subscribe
      ({
        next:(data) => {
          this.blockUI.stop();
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
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
        },
      });
  }  
  LoadCountryList() {
    this._MasterServices.GetCountryMaster().subscribe({
      next: (data) => {
        if (data.actionResult.success == true) {
          var tdata = JSON.parse(data.actionResult.result);
          tdata = tdata ? tdata : [];
          this.lstCountryMaster = tdata;
        }
      },
      error: (e) => {
        this.blockUI.stop();
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
      },
    });
  }
  LoadResidentList() {
    var HomeId = "";
    if (this.UserTypeCurre != UserTypes.SuperAdmin) {
      HomeId = localStorage.getItem('HomeId');
    }
    this.blockUI.start("Please Wait.....");   
    this._MasterServices.GetResidentMaster(HomeId,false)
      .subscribe({
        next:(data) => {
          this.blockUI.stop();          
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
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
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
    if (UserTypes.SuperAdmin !== localStorage.getItem('userTypeId')) {
      this.ResidentMaster.HomeId = localStorage.getItem('HomeId');
    } 
  }
  LoadResidentDetails(id)
  {
    this.SelectedFile = [];
    this.blockUI.start("Please Wait.....");
    this._MasterServices.GetResidentMasterById(id)
      .subscribe
      ({
        next:(data) => {
          this.blockUI.stop();
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
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
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
    this.blockUI.start("Please Wait.....");
      this._MasterServices.AddUpdateResidentMaster(formData)
        .subscribe
        ({
          next:(data) => {
            this.blockUI.stop();
            this.LoadResidentList();
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data.actionResult.errMsg });
            this.ResidentMasterId = data.actionResult.stringVal
            console.log('actionResult',data.actionResult);
            //this.mode = null;            
          },
          error: (e) => {
            this.blockUI.stop();
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
          },
        });
  }
  SubmitAdmissionForm(){
    this.ResidentBookingDetails.CreatedBy = localStorage.getItem('userId');  
    this.ResidentBookingDetails.ModifiedBy = localStorage.getItem('userId'); 
    this.ResidentBookingDetails.ResidentMasterId = this.ResidentMasterId; 
    this.blockUI.start("Please Wait.....");
      this._MasterServices.AddUpdateResidentBookingDetails(this.ResidentBookingDetails)
        .subscribe
        ({
          next:(data) => {
            this.blockUI.stop();
            this.LoadResidentList();
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data.actionResult.errMsg });
            console.log('actionResult',data.actionResult);
            this.mode = null;          
          },
          error: (e) => {
            this.blockUI.stop();
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.message });
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
