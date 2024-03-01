import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';


@Component({
  selector: 'app-form-master',
  templateUrl: './form-master.component.html',
  styleUrls: ['./form-master.component.scss']
})
export class FormMasterComponent implements OnInit {

  @ViewChild('myForm') public myForm: NgForm;
  @ViewChild('dt') public dataTable: Table;
  @ViewChild('filtr') filtr: ElementRef;
  
  mode: string = null;
  lstHeadMaster: any[]=[];
  public lstMaster: any[]=[];
  public master: any = <any>{};
  filteredValuesLength:number=0;
  stlststatus: any[]=[];
  
  //Utiliy Services
  constructor(private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,    
  ) 
  {
    //super();
    this._ConstantServices.ActiveMenuName = "Form Master"; 
    this.stlststatus = [
      { name: 'Active', code: 1 },
      { name: 'Inactive', code: 0 }
    ];    
  }

  ngOnInit(): void {
  }

  GetformMasterById(){}

  GetHomeMasterById(id) {}

  AddNewItem() {
    this.ResetModel();
    this.mode = "Add";    
    this.myForm?.resetForm();
  }

  ResetModel() {
    this.master = <any>{};
    this.master.Status = 1;
    
  }
  Close() {
    this.mode = null;
  }
  exportToItemExcel() {
    let importData: any = <any>{};
    importData.reportname = "Forms";
    importData.filename = "Forms";
    this._MasterServices.downloadReport(importData);
  } 
  //Filter
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  
}
