import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ConstantsService, FormTypes } from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';
import { PreAdmissionAssessmentFormsComponent } from '../pre-admission-assessment-forms/pre-admission-assessment-forms.component';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-forms-dashboard',
    templateUrl: './forms-dashboard.component.html',
    styleUrls: ['./forms-dashboard.component.scss'],
})

export class FormsDashboardComponent extends AppComponentBase implements OnInit {

    @ViewChild('formContainer', { read: ViewContainerRef }) formContainer: ViewContainerRef;
    componentRef: ComponentRef<any>;

    public lstMaster: any[]=[];
    items: MenuItem[];

    rangeDates: Date[] | undefined;

    selectedFormType:string;
    
    constructor(private _ConstantServices: ConstantsService,
        private _MasterServices:MasterService,
        private _UtilityService: UtilityService,
      ) 
      {
        super();
        this._ConstantServices.ActiveMenuName = "Form Master";
      }

    ngOnInit() { this.GetformMaster()}

    toggleTieredMenu(menu, event, userid, admissionid) {
      this.items = [];    
      this.items = [
       ...this.items,
       {
         label: 'View/Edit',
         icon: 'pi pi-eye',
         command: () => {
          //fetch the form that user wants to edit or view 
          
          // var params=encodeURIComponent(btoa("id=" + userid + "&admissionid=" + admissionid));
          // window.open("#/profile?q=" + params, "_self");
         }
       }
     ];
     //console.log('items', this.items);
     menu.toggle(event);
   }

    GetformMaster(){
        this._UtilityService.showSpinner();   
        this.unsubscribe.add = this._MasterServices.GetFormMaster(true)
          .subscribe({
            next:(data) => {
              this._UtilityService.hideSpinner();          
              if (data.actionResult.success == true) {
                var tdata = JSON.parse(data.actionResult.result);
                //console.log(tdata);
                tdata = tdata ? tdata : [];
                this.lstMaster = tdata;
              }
              else {
                this.lstMaster = [];            
              }
            },
            error: (e) => {
              this._UtilityService.hideSpinner();
              this._UtilityService.showErrorAlert(e.message);
            },
          });
    }

    showForm(selectedFormId: string) {  
      // Clear existing component if any
      if (this.componentRef) {
        this.componentRef.destroy();
      }
  
      // Determine which component to load based on selectedForm
      let componentType: any;
      switch (selectedFormId) {
        case FormTypes.PreAdmsnForm:
          componentType = PreAdmissionAssessmentFormsComponent;
          break;
        case FormTypes.MedicalForm:
          componentType = NotfoundComponent;
          break;
        case FormTypes.Fitness:
          componentType = NotfoundComponent;
          break;
        default:
          componentType = NotfoundComponent;
      }
  
      // Load the component dynamically
      this.componentRef = this.formContainer.createComponent(componentType);
    }
}
