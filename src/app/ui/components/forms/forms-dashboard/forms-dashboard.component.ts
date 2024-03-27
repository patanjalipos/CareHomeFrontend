import {
    Component,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {
    ConstantsService,
    FormTypes,
} from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';
import { PreAdmissionAssessmentFormsComponent } from '../pre-admission-assessment-forms/pre-admission-assessment-forms.component';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forms-dashboard',
    templateUrl: './forms-dashboard.component.html',
    styleUrls: ['./forms-dashboard.component.scss'],
})
export class FormsDashboardComponent
    extends AppComponentBase
    implements OnInit
{
    @ViewChild('formContainer', { read: ViewContainerRef })
    formContainer: ViewContainerRef;
    componentRef: ComponentRef<any>;

    public lstMaster: any[] = [];
    public formDashboardList: any[] = [];
    items: MenuItem[];

    residentAdmissionInfoId: string;
    rangeDates: Date[] | undefined;
    selectedFormType: string;

    constructor(
        private _ConstantServices: ConstantsService,
        private _MasterServices: MasterService,
        private _UtilityService: UtilityService,
        private route: ActivatedRoute,

    ) {
        super();
        this._ConstantServices.ActiveMenuName = 'Form Dashboard';

        this.unsubscribe.add = this.route.queryParams.subscribe((params) => {
          var ParamsArray = this._ConstantServices.GetParmasVal(params['q']);

          if (ParamsArray?.length > 0) {
              //console.log('ParamsArray',ParamsArray);
              this.residentAdmissionInfoId =
                  ParamsArray.find((e) => e.FieldStr == 'admissionid')
                      ?.FieldVal || null;
          }
      });
    }

    ngOnInit() {
        this.GetformMaster();
    }

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
                },
            },
        ];
        //console.log('items', this.items);
        menu.toggle(event);
    }

    GetformMaster() {
        this._UtilityService.showSpinner();
        this.unsubscribe.add = this._MasterServices
            .GetFormMaster(true)
            .subscribe({
                next: (data) => {
                    this._UtilityService.hideSpinner();
                    if (data.actionResult.success == true) {
                        var tdata = JSON.parse(data.actionResult.result);
                        //console.log(tdata);
                        tdata = tdata ? tdata : [];
                        this.lstMaster = tdata;
                    } else {
                        this.lstMaster = [];
                    }
                },
                error: (e) => {
                    this._UtilityService.hideSpinner();
                    this._UtilityService.showErrorAlert(e.message);
                },
            });
    }

    searchForm(selectedFormId: string, rangeDates: Date[]) {
        console.log('form Id: ' + selectedFormId);
        console.log('date Ranges: ' + rangeDates);
        console.log('ResidenInfo Id: ' + this.residentAdmissionInfoId);

        const residentAdmissionInfoId = this.residentAdmissionInfoId;
        const formMasterId = selectedFormId;

        // Assuming rangeDates[0] is the fromDate and rangeDates[1] is the toDate
        const fromDate = rangeDates[0];
        const toDate = rangeDates[1];

        // Call the API
        this._MasterServices.GetFormDasboardList(residentAdmissionInfoId,formMasterId,fromDate,toDate
        ).subscribe({
          next: (data) => {
              this._UtilityService.hideSpinner();
              if (data.actionResult.success == true) {
                  var tdata = JSON.parse(data.actionResult.result);
                  console.log(tdata);
                  tdata = tdata ? tdata : [];
                  this.formDashboardList = tdata;
                  console.log(this.formDashboardList);
              } else {
                  this.formDashboardList = [];
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
