import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { MasterService } from '../../master/master.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';

@Component({
  selector: 'app-chart-preferences',
  templateUrl: './chart-preferences.component.html',
  styleUrls: ['./chart-preferences.component.scss']
})
export class ChartPreferencesComponent extends AppComponentBase implements OnInit {
  @Input() mode: string = 'view';
  @Input() userid: any = null;
  @Input() admissionid: any = null;
  loginId:any=localStorage.getItem('userId');
  Clinical: any = <any>{};
  lstResidentChart:any[]=[];
  rowGroupMetadata: any;
  isEditable:boolean=true;
  constructor(
    private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService) 
    { 
    super();    
  }

  
  ngOnInit(): void {
    if (this.userid != null && this.userid != undefined && this.admissionid != null && this.admissionid != undefined) {
      this.isEditable = false;
    }
    
  }

  ngOnChanges(changes: SimpleChanges): void {  
    if (this.userid != null && this.userid != undefined && this.admissionid != null && this.admissionid != undefined) {
      this.GetClinicalChartPreferencesById(this.admissionid);
    }
  }

  
  
  edit()
  {
    this.mode='edit';
    if (this.userid != null && this.admissionid != null) {
      this.GetClinicalChartPreferencesById(this.admissionid);      
    }
    else
    {
      this._UtilityService.showWarningAlert("Resident admission details are missing.");
    }
  }  
  OnEnabled(id)
  {
   
    if(id!=null && id!=undefined)
    {
    var Idx = this.lstResidentChart.findIndex(f => f.clinicalchartpreferencesid == id);
    if (Idx >= 0) {
        this.lstResidentChart[Idx].modifiedby = this.loginId;                
      }         
    }
  }
  
  GetClinicalChartPreferencesById(admissionid) {
    this._UtilityService.showSpinner();   
    this.unsubscribe.add = this._MasterServices.GetClinicalChartPreferencesById(admissionid)  
      .subscribe({
        next:(data) => {
          this._UtilityService.hideSpinner();          
          if (data.actionResult.success == true) {
            var tdata = JSON.parse(data.actionResult.result);
            tdata = tdata ? tdata : [];
            this.lstResidentChart = tdata;  
            this.updateRowGroupMetaData();                     
          }
        },
        error: (e) => {
          this.rowGroupMetadata = {};
          this._UtilityService.hideSpinner();
          this._UtilityService.showErrorAlert(e.message);
        },
      });
  }  

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.lstResidentChart) {
      for (let i = 0; i < this.lstResidentChart.length; i++) {
        let rowData = this.lstResidentChart[i];
        let chartheadname = rowData.chartheadname;
        if (i == 0) {
          this.rowGroupMetadata[chartheadname] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.lstResidentChart[i - 1];
          let previousRowGroup = previousRowData.chartheadname;
          if (chartheadname === previousRowGroup)
            this.rowGroupMetadata[chartheadname].size++;
          else
            this.rowGroupMetadata[chartheadname] = { index: i, size: 1 };
        }
      }
      //console.log("data---", this.rowGroupMetadata)      
    }    
  }
  save()
  {
    if (this.userid != null && this.admissionid != null) {      
      this.Clinical.userid = this.userid;
      this.Clinical.residentadmissioninfoid = this.admissionid;
      this.Clinical.modifiedby = this.loginId;
      var selectedExtraItemDetails = [];      
      var result=this.lstResidentChart.filter(f=>f.isenable==true || f.clinicalchartpreferencesid!=null);
      result.forEach(x => {
        var jsonObject = {
          "clinicalchartpreferencesid": x.clinicalchartpreferencesid,
          "chartmasterid": x.chartmasterid,
          "isenable": x.isenable,
          "modifiedby": x.modifiedby
        }
        selectedExtraItemDetails.push(jsonObject);      
    });
    //console.log('selectedExtraItemDetails', selectedExtraItemDetails);    
    this.Clinical.chartDTOs = selectedExtraItemDetails;
      //console.log('Clinical', this.Clinical);
      this._UtilityService.showSpinner();
      this.unsubscribe.add = this._MasterServices.AddInsertUpdateChartPreferences(this.Clinical)
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
    this.mode='view';
    this.GetClinicalChartPreferencesById(this.admissionid); 
  }
}
