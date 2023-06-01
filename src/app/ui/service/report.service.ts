import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _ConstService:ConstantsService,private _httpclient: HttpClient) { }

  GetFallRiskAssessmentReport(homemasterid: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this._ConstService.BaseUriAdmin,
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.append('homemasterid', homemasterid);   
    return this._httpclient.get<any>(this._ConstService.BaseUriAdmin + "api/Report/GetFallRiskAssessmentReport", { "headers": reqHeader, "params": params });
}
}