import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServiceService } from 'src/app/ui/service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AppComponentBase } from 'src/app/app-component-base';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent extends AppComponentBase {    
    valCheck: string[] = ['remember'];
    UserName: string;
    Password: string;
    invalidLogin: Boolean = false;
    constructor(
        public layoutService: LayoutService,
        public _AuthServices: AuthServiceService,
        private route: ActivatedRoute,
        private router: Router,
        private _ConstantService: ConstantsService,
        private _UtilityService: UtilityService, 
    ) { 
        super();
    }


    ValidateLogin() {
        //this.router.navigateByUrl("/uicare");
        this._UtilityService.showSpinner();
        this.unsubscribe.add = this._AuthServices.Login(this.UserName, this.Password)
            .subscribe({
                next: (data) => {
                    this._UtilityService.hideSpinner();
                    if (data.actionResult.success == true) {
                        var tdata = JSON.parse(data.actionResult.result);
                        tdata = tdata ? tdata : [];
                        sessionStorage.clear();
                        localStorage.clear();

                        localStorage.setItem('token', data.actionResult.AuthenticationToken);
                        localStorage.setItem('userTypeId', data.actionResult.userTypeId);
                        localStorage.setItem('userId', data.actionResult.userId);
                        localStorage.setItem('HomeMasterId', tdata.HomeMasterId);
                        localStorage.setItem('FirstName', tdata.firstname == null ? '' : tdata.FirstName);
                        localStorage.setItem('LastName', tdata.lastname == null ? '' : tdata.LastName);
                        localStorage.setItem('Gender', tdata.Gender);
                        localStorage.setItem('ProfileImage', tdata.ProfileImage);
                        //this._dymservice.loadMenu();
                        this.router.navigateByUrl("/uicare");
                        this._ConstantService.IsLocal = true;
                    }
                    else {
                        this.invalidLogin = true;
                        this._UtilityService.showWarningAlert("Invalid credentials.");
                        //alert("Invalid user");
                    }
                },
                error: (e) => {
                    this._UtilityService.hideSpinner();
                    this._UtilityService.showErrorAlert(e.message);
                    //alert(e.message);
                }
            }
            );
    }
}
