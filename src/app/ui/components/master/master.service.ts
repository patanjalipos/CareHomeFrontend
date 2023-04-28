import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsService } from '../../service/constants.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private _ConstService:ConstantsService,private _httpclient: HttpClient) { }
 
    GetCountryMaster(): Observable<any> {
        let reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
        });
        let params = new HttpParams();
        return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetCountryMaster", { "headers": reqHeader, "params": params });
    }
  //#region MenuItem Master

  GetMenuItemMaster(moduleId: string, status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('moduleId', moduleId);
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetMenuItemMaster", { "headers": reqHeader, "params": params });
}    
GetMenuItemMasterById(MenuItemId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('MenuItemId', MenuItemId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetMenuItemMasterById", { "headers": reqHeader, "params": params });
}
AddUpdateMenuItemMaster(MenuItemMaster: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(MenuItemMaster).toString();
    if (MenuItemMaster.MenuItemId != null && MenuItemMaster.MenuItemId != "") {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/EditMenuItemMaster", data, { "headers": reqHeader, "params": params });
    }
    else {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddMenuItemMaster", data, { "headers": reqHeader, "params": params });
    }
}

//#end region

  //  #region HomeMaster

  GetAllHomeMasterList(): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    return this._httpclient.get(this._ConstService.BaseUriAdmin + "api/Admin/GetAllHomeMasterList");
}
GetHomeMaster(): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetHomeMaster", { "headers": reqHeader, "params": params });
}
GetHomeMasterById(HomeId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //5'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('HomeId', HomeId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetHomeMasterById", { "headers": reqHeader, "params": params });
}
GetHomeMasterEnabledBooking(): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetHomeMasterEnabledBooking", { "headers": reqHeader, "params": params });
}
AddUpdateHomeMaster(HomeMaster: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(HomeMaster).toString();

    if (HomeMaster.HomeId != null && HomeMaster.HomeId != "") {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/EditHomeMaster", data, { "headers": reqHeader, "params": params });
    }
    else {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddHomeMaster", data, { "headers": reqHeader, "params": params });
    }
}

// #endregion

// #region UserTypeMaster

GetUserTypeMaster(moduleId: string = ""): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('moduleId', moduleId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserTypeMaster", { "headers": reqHeader, "params": params });
}

//#endregion 
 
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

GetUserMasterById(userId: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('userId', userId);
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

AddUpdateUserMaster(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('loginId', localStorage.getItem('userId'));
    var data = JSON.stringify(obj).toString();


    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddUpdateUserMaster", data, { "headers": reqHeader, "params": params });
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


//#endregion

//#region  ResidentMaster

GetResidentMaster(HomeId: string = "", status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('HomeId', HomeId);
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentMaster", { "headers": reqHeader, "params": params });
}

GetResidentMasterById(id: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentMasterById", { "headers": reqHeader, "params": params });
}

AddUpdateResidentMaster(obj: FormData): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = obj;//JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddUpdateResidentMaster", data, { "headers": reqHeader, "params": params });
}   

AddUpdateResidentBookingDetails(obj:any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    console.log('ResidentBookingDetails',obj);
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddUpdateResidentBookingDetails", data, { "headers": reqHeader, "params": params });
}

//#endregion

//#region  ExportToExcel
downloadReport(obj: any): void {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    this._httpclient.post(this._ConstService.BaseUriAdmin + "api/downloadReport", data, { "headers": reqHeader, "params": params, responseType: 'blob' as 'json' }).subscribe(
        (response: any) => {
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            if (obj.filename)
                downloadLink.setAttribute('download', obj.filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    )
}
}
