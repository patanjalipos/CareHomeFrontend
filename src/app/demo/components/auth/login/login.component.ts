import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AuthServiceService } from 'src/app/demo/service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/demo/service/constants.service';

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
export class LoginComponent {
    @BlockUI() blockUI: NgBlockUI;
    valCheck: string[] = ['remember'];
    UserName: string;
    Password: string;
    invalidLogin: Boolean = false;

    constructor(
        public layoutService: LayoutService,
        public _AuthServices: AuthServiceService,
        private route: ActivatedRoute,
        private router: Router,
        private _ConstantService: ConstantsService
    ) { }


    ValidateLogin() {
        this.router.navigateByUrl("/uicare");
        // this.blockUI.start("Please Wait....");
        // this._AuthServices.Login(this.UserName, this.Password)
        //     .subscribe({
        //         next: (data) => {
        //             this.blockUI.stop();
        //             if (data.actionResult.success == true) {
        //                 var tdata = JSON.parse(data.actionResult.result);
        //                 tdata = tdata ? tdata : [];
        //                 sessionStorage.clear();
        //                 localStorage.clear();

        //                 localStorage.setItem('token', data.actionResult.authenticationToken);
        //                 localStorage.setItem('userTypeId', data.actionResult.userTypeId);
        //                 localStorage.setItem('userId', data.actionResult.userId);
        //                 localStorage.setItem('ClinicId', tdata.ClinicId);
        //                 localStorage.setItem('ClinicType', tdata.ClinicType);
        //                 localStorage.setItem('FirstName', tdata.FirstName == null ? '' : tdata.FirstName);
        //                 localStorage.setItem('LastName', tdata.LastName == null ? '' : tdata.LastName);
        //                 localStorage.setItem('Gender', tdata.Gender);
        //                 localStorage.setItem('ProfileImage', tdata.ProfileImage);
        //                 localStorage.setItem('IsSpecialAccess', tdata.IsSpecialAccess);
        //                 //this._dymservice.loadMenu();
        //                 this.router.navigateByUrl("/");
        //                 this._ConstantService.IsLocal = true;
        //             }
        //             else {
        //                 this.invalidLogin = true;
        //                 alert("Invalid user");
        //             }
        //         },
        //         error: (e) => {
        //             this.blockUI.stop();
        //             alert(e.message);
        //         }
        //     }
        //     );
    }
}
