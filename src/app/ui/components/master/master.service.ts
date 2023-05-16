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
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('moduleId', moduleId);
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetMenuItemMaster", { "headers": reqHeader, "params": params });
}    
GetMenuItemMasterById(menuid): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('menuid', menuid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetMenuItemMasterById", { "headers": reqHeader, "params": params });
}
AddUpdateMenuItemMaster(MenuItemMaster: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(MenuItemMaster).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddUpdateMenuItemtMaster", data, { "headers": reqHeader, "params": params });  
}

//#end region

  //  #region HomeMaster
  
GetHomeMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetHomeMaster", { "headers": reqHeader, "params": params });
}
GetHomeMasterById(id: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //5'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('id', id);
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

    if (HomeMaster.HomeMasterId != null && HomeMaster.HomeMasterId != "") {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/EditHomeMaster", data, { "headers": reqHeader, "params": params });
    }
    else {
        return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddHomeMaster", data, { "headers": reqHeader, "params": params });
    }
}

// #endregion

//#region Alert Master

GetAlertHeadMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetAlertHeadMaster", { "headers": reqHeader, "params": params });
}    
GetAlertHeadMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetAlertHeadMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateAlertHead(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateAlertHead", data, { "headers": reqHeader, "params": params });  
}

GetAlertMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetAlertMaster", { "headers": reqHeader, "params": params });
}    
GetAlertMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetAlertMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateAlert(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateAlert", data, { "headers": reqHeader, "params": params });  
}

//#end region

//#region Chart Master

GetChartHeadMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetChartHeadMaster", { "headers": reqHeader, "params": params });
}    
GetChartHeadMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetChartHeadMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateChartHead(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateChartHead", data, { "headers": reqHeader, "params": params });  
}

GetChartMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetChartMaster", { "headers": reqHeader, "params": params });
}    
GetChartMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetChartMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateChart(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateChart", data, { "headers": reqHeader, "params": params });  
}

//#end region

//#region Indicator Master

GetIndicatorGroupMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetIndicatorGroupMaster", { "headers": reqHeader, "params": params });
}    
GetIndicatorGroupMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetIndicatorGroupMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateIndicatorGroup(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateIndicatorGroup", data, { "headers": reqHeader, "params": params });  
}

GetIndicatorMaster(status: any = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetIndicatorMaster", { "headers": reqHeader, "params": params });
}    
GetIndicatorMasterById(id): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetIndicatorMasterById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateIndicator(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateIndicator", data, { "headers": reqHeader, "params": params });  
}

//#end region

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

  GetUserMaster(homeMasterId): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('homeMasterId', homeMasterId);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetUserMaster", { "headers": reqHeader, "params": params });
}

GetUserMasterById(userId): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
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

AddInsertUpdateUserMaster(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin
    });
    let params = new HttpParams();
    params = params.append('loginId', localStorage.getItem('userId'));
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateUserMaster", data, { "headers": reqHeader, "params": params });
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

GetResidentMaster(HomeMasterId, status = true): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('HomeMasterId', HomeMasterId);
    params = params.append('status', status);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentMaster", { "headers": reqHeader, "params": params });
}

GetResidentMasterById(id: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentMasterById", { "headers": reqHeader, "params": params });
}

AddInsertUpdateResidentMaster(obj: FormData): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = obj;//JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateResidentMaster", data, { "headers": reqHeader, "params": params });
} 

GetResidentHealthCareById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentHealthCareById", { "headers": reqHeader, "params": params });
}

AddInsertUpdateResidentHealthCare(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateResidentHealthCare", data, { "headers": reqHeader, "params": params });
} 
GetResidentPreferencesById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentPreferencesById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateResidentPreferences(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateResidentPreferences", data, { "headers": reqHeader, "params": params });
} 
GetResidentPriorAdmissionById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetResidentPriorAdmissionById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateResidentPriorAdmission(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateResidentPriorAdmission", data, { "headers": reqHeader, "params": params });
} 

//#endregion

//#region  Clinical

GetClinicalAllergiesById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetClinicalAllergiesById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateClinicalAllergies(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateClinicalAllergies", data, { "headers": reqHeader, "params": params });
} 

GetClinicalIndicatorById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetClinicalIndicatorById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateClinicalIndicator(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateClinicalIndicator", data, { "headers": reqHeader, "params": params });
} 


GetClinicalInformationById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetClinicalInformationById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateClinicalInformation(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateClinicalInformation", data, { "headers": reqHeader, "params": params });
} 

GetClinicalBaselineHealthInfoById(admissionid: string): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('admissionid', admissionid);
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Admin/GetClinicalBaselineHealthInfoById", { "headers": reqHeader, "params": params });
}
AddInsertUpdateClinicalBaselineHealthInfo(obj: any): Observable<any> {
    let reqHeader = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
         //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    var data = JSON.stringify(obj).toString();
    return this._httpclient.post<any>(this._ConstService.BaseUriAdmin + "api/Admin/AddInsertUpdateClinicalBaselineHealthInfo", data, { "headers": reqHeader, "params": params });
} 

//#endregion



//#region  ExportToExcel
downloadReport(obj: any): void {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
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
