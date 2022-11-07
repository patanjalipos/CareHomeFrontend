
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ResidentList } from "../classes/ResidentList";

@Injectable()
export class CareService {

    constructor(private http: HttpClient) { }
    
    getResidentListt() : Observable<any> {
        return this.http.get<any>("assets/demo/data/residentlist.json");
    }
    getResidentList() {
        return this.http.get<any>('assets/demo/data/residentlist.json')
            .toPromise()
            .then(res => res.data as ResidentList[])
            .then(data => data);
    }
}