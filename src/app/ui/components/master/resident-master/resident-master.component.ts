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
  lstResidentMaster: any[]=[];
  public ResidentMaster: any = <any>{};
  selectedUserType: any[]=[];
  filteredValuesLength:number=0;
  stlsttitle: any[];
  stlstgender: any[];
  stlstmaritalstatus: any[];
  stlststatus: any[]=[];
  
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
   }

  ngOnInit(): void {
    if (UserTypes.SuperAdmin === localStorage.getItem('userTypeId')) {
      this.LoadHomeMaster();
    }
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
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
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
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
        },
      });
  }
  AddResident()
  {
    this.mode = "add";
    this.ResidentMaster = <any>{};    
    this.ResidentMaster.Status = 1;   
    if (UserTypes.SuperAdmin !== localStorage.getItem('userTypeId')) {
      this.ResidentMaster.HomeId = localStorage.getItem('HomeId');
    } 
  }
  LoadResidentDetails(id)
  {
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
    this.blockUI.start("Please Wait.....");
      this._MasterServices.AddUpdateResidentMaster(this.ResidentMaster)
        .subscribe
        ({
          next:(data) => {
            this.blockUI.stop();
            this.LoadResidentList();
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data.actionResult.errMsg });
            this.mode = null;            
          },
          error: (e) => {
            this.blockUI.stop();
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: e.Message });
          },
        });
  }

  CloseModal() {
    this.mode = null;
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
