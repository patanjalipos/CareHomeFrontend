import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ConstantsService, CustomDateFormat, UserTypes } from 'src/app/ui/service/constants.service';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss'],
  providers: [
    MessageService,   
  ]
})
export class UserMasterComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('dt') public dataTable: Table;
  @ViewChild('filtr') filtr: ElementRef;
  UserTypes = UserTypes;
  customDateFormat = CustomDateFormat;
  HomeCurre: string = localStorage.getItem('HomeId');
  UserTypeCurre: string = localStorage.getItem('userTypeId');
  mode:string=null;
  filteredValuesLength:number=0;
  todayDate = new Date();
  yesterday = new Date();
  lstUserMaster:any[]=[];
 
  stlsttitle: any[];
  stlstbloodgrp: any[];
  stlstgender: any[];
  stlststatus: any[];
  lstHomeMaster: any[]=[];
  lstUserType: any[]=[];
  public RegistrationMainModel: any = <any>{};
  selectedHome:any[]=[];
  lstFacilityResident:any[]=[];
  lstResidentfacility:any[]=[];
  ShowResidentFacilityModel:Boolean=false;

  constructor(
    private _ConstServices: ConstantsService,
    private _MasterServices:MasterService,
    private messageService: MessageService,
    ) 
    { 
      this.stlsttitle = [
        { name: 'Mr.', code: 'Mr.' },
        { name: 'Mrs.', code: 'Mrs.' },
        { name: 'Ms.', code: 'Ms.' },
        { name: 'Master', code: 'Master' }
      ];
      this.stlstbloodgrp = [
        { name: 'A+ve', code: 'A+ve' },
        { name: 'A-ve', code: 'A-ve' },
        { name: 'B+ve', code: 'B+ve' },
        { name: 'B-ve', code: 'B-ve' },
        { name: 'AB+ve', code: 'AB+ve' },
        { name: 'AB-ve', code: 'AB-ve' },
        { name: 'O+ve', code: 'O+ve' },
        { name: 'O-ve', code: 'O-ve' }
      ];
      this.stlstgender = [
        { name: 'Male', code: 'Male' },
        { name: 'Female', code: 'Female' },
        { name: 'Other', code: 'Other' }
      ];
      this.stlststatus = [
        { name: 'Active', code: 1 },
        { name: 'Inactive', code: 0 }
      ];
    }

  ngOnInit(): void {
    this.LoadHomeMaster();
    this.LoadUserList();
    this.LoadUserTypeList();
    this.yesterday.setFullYear(this.yesterday.getFullYear() - 130);
    this.todayDate.setDate(this.todayDate.getDate() - 7);
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
          }
          else {
            this.lstHomeMaster = [];            
          }
        },
        error: (e) => {
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
        },
      });
  }  
  LoadUserTypeList() {
    this.blockUI.start("Please Wait.....");
    this._MasterServices.GetUserTypeMaster()
      .subscribe
      ({
        next:(data) => {
          this.blockUI.stop();
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.lstUserType = tdata;
            if(this.lstUserType?.length>0)
            {
              this.lstUserType=this.lstUserType.filter(f=>f.UserTypeId!=='6075474600f6f4c43c5d54a1');
            }
          }
          else {
            this.lstUserType = [];
          }
        },
        error: (e) => {
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
        },
      });
  }
  LoadUserList() {
    var HomeId = "";
    if (this.UserTypeCurre != UserTypes.SuperAdmin) {
      HomeId = localStorage.getItem('HomeId');
    }
    this.blockUI.start("Please Wait.....");
    this._MasterServices.GetUserMaster(HomeId)
      .subscribe
      ({
        next:(data) => {
          this.blockUI.stop();
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.lstUserMaster = tdata;            
            if (this.filtr !== undefined) {
              this.filtr.nativeElement.value = "";
              this.dataTable.reset();
              this.filteredValuesLength = this.lstUserMaster?.length;
              }            
          }
          else {
            this.lstUserMaster = [];            
          }
        },
        error: (e) => {
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
        },
      });
  }
  AddUserDetails()
  {
    this.mode = "add";
    this.RegistrationMainModel = <any>{};
    this.RegistrationMainModel.DateOfBirth = new Date("01/01/2001 00:00:00");
    if (UserTypes.SuperAdmin !== localStorage.getItem('userTypeId')) {
      this.RegistrationMainModel.HomeId = localStorage.getItem('HomeId');
    }
    this.RegistrationMainModel.Status = 1;    
  }
  LoadUserDetails(userId)
  {
    this.blockUI.start("Please Wait.....");
    this._MasterServices.GetUserMasterById(userId)
      .subscribe
      ({
        next:(data) => {
          this.blockUI.stop();
          if (data.actionResult.success == true) 
          {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.RegistrationMainModel = tdata;
            if(this.RegistrationMainModel?.DateOfBirth!=null && this.RegistrationMainModel?.DateOfBirth!=undefined)
            {
            var newDate=new Date(this.RegistrationMainModel.DateOfBirth);           
            this.RegistrationMainModel.DateOfBirth=newDate;
            }
            this.RegistrationMainModel.DateOfBirth = new Date(this.RegistrationMainModel.DateOfBirth);           
            this.mode = "update";            
          }

        },
        error: (e) => {
          this.blockUI.stop();
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
        },
      });
  }
  Submit()
  {

  }
  
  CloseModal() {
    this.mode = null;      
  }
  //Filter
  onFilter(event, dt) {
    this.filteredValuesLength = event.filteredValue.length; // count of displayed rows     
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Export
  exportToItemExcel()
  {
    var NewHomeId = "";
    if (this.UserTypeCurre != UserTypes.SuperAdmin) {
      NewHomeId = localStorage.getItem('HomeId');
    }
    let importData: any = <any>{};
    importData.reportname = "userlist";
    importData.filename = "userlist";
    importData.homeId = NewHomeId;
    this._MasterServices.downloadReport(importData);
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
  SetFacility()
  {
      if(this.selectedHome?.length>0)
      {
        this.selectedHome.map(e=>
          {
              if(this.lstFacilityResident.filter(f=>f.HomeId==e)?.length==0)
              {
                this.lstFacilityResident.push({"FacilityName":this.lstHomeMaster.find(f=>f.HomeId==e).HomeName,"HomeId":e,"EnableFacility":false,"AutoAssignResident":false,"ResidentList":[]});
              }
          });

          this.lstFacilityResident.map(e=>
            {
              if(this.selectedHome.filter(f=>f==e.HomeId)?.length==0)
              {
                if(this.lstFacilityResident?.length==1)
                this.lstFacilityResident=[];
                else
                this.lstFacilityResident=this.lstFacilityResident.filter(f=>f.HomeId!==e.HomeId);
              }
            });
      }
      else
      {
        this.lstFacilityResident=[];
      }
  }
  ShowResidentDetails(HomeId)
  {
      this.ShowResidentFacilityModel=true;
  }
  
}
