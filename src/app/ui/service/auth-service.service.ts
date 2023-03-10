import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private httpClient: HttpClient,
    private _ConsService: ConstantsService
    //,
    //private _AuthService: AuthService
    ) { }
  Login(LoginId:string, Password:string): Observable<any> 
    {
        let reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': this._ConsService.BaseUriUser
        });
        let params = new HttpParams();

        var UserMasterNew:any=<any>{};
        UserMasterNew.LoginId=LoginId;
        UserMasterNew.Password=Password;

        var data = JSON.stringify(UserMasterNew);
        return this.httpClient.post<any>(this._ConsService.BaseUriUser + "api/User/ValidateUser", data, { "headers": reqHeader, "params": params });

        // var data = "LoginId=" + LoginId + "&Password=" + Password;
        // var data = JSON.stringify(CaptchaModel);
        // return this.httpClient.get(this._ConsService.BaseUri + "api/User/ValidateUser?" + data);
    }
}
