import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsService } from '../../service/constants.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private _ConstService:ConstantsService,private _httpclient: HttpClient) { }
  //#region  UserMaster

  GetUserMaster(HomeId: string = ""): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('HomeId', HomeId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserMaster", { "headers": reqHeader, "params": params });
}

GetUserMasterById(UserId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('UserId', UserId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserMasterById", { "headers": reqHeader, "params": params });
}
GetUserMenuItemAccessByModuleId(userTypeId: string, UserId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('userTypeId', userTypeId);
    params = params.append('UserId', UserId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserMenuItemAccessByModuleId", { "headers": reqHeader, "params": params });
}

AddUpdateUserRegistration(UserMaster: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('userId', localStorage.getItem('userId'));
    var data = JSON.stringify(UserMaster).toString();


    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/SaveUpdateUserRegistration", data, { "headers": reqHeader, "params": params });
}    

GetMasterMenuItemForUserAccess(UserTypeId: string, UserId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('userTypeId', UserTypeId);
    params = params.append('UserId', UserId);
    var data = "";
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserMenuItemAccessByModuleId", { "headers": reqHeader, "params": params });
}
LoadItemCatgMasterForAccess(): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = "";
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserItemCatgAccessMaster", { "headers": reqHeader, "params": params });
}

GetDoctorListByDepartmentId(clinicId: string, departmentid:string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('clinicId', clinicId);
    params = params.append('departmentid', departmentid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetDoctorListByDepartmentId", { "headers": reqHeader, "params": params });
}
//#endregion
}
