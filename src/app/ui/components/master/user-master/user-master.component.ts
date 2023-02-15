import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserTypes } from 'src/app/ui/service/constants.service';
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
  @ViewChild('dt') public dataTable: Table;
  @ViewChild('filtr') filtr: ElementRef;
  @BlockUI() blockUI: NgBlockUI;
  mode:string=null;
  filteredValuesLength:number=0;
  lstUserMaster:any[]=[];
  UserTypeCurre:string;
  UserTypes:UserTypes;


  constructor(
    private _MasterServices:MasterService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.LoadUserList();
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

  }
  LoadUserDetails(UserId)
  {

  }
  LoadMenuItem(UserTypeId,UserId)
  {

  }
  exportToItemExcel()
  {

  }
  //Filter
  onFilter(event, dt) {
    this.filteredValuesLength = event.filteredValue.length; // count of displayed rows     
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
