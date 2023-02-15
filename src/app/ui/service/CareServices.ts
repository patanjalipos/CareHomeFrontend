
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, firstValueFrom, map} from 'rxjs';
import { DietList } from "../classes/Dietlist";
import { FallRiskAssessmentList } from "../classes/FallRiskAssessmentList";
import { FluidIntakeDetails } from "../classes/FluidIntakeDetails";
import { ResidentList } from "../classes/ResidentList";
@Injectable()
export class CareService {

    constructor(private http: HttpClient) { }
    
    getResidentListt() : Observable<any> {
        return this.http.get<any>("assets/ui/data/residentlist.json");
    }
    getResidentList() {
        return this.http.get<any>('assets/ui/data/residentlist.json')
            .toPromise()
            .then(res => res.data as ResidentList[])
            .then(data => data);
    }
    getFluidHistoryDetails() {
        return this.http.get<any>('assets/ui/data/fluidintakedetails.json')
            .toPromise()
            .then(res => res.data as FluidIntakeDetails[])
            .then(data => data);
    }

    getDietList() {
        return this.http.get<any>('assets/ui/data/diet.json')
            .toPromise()
            .then(res => res.data as DietList[])
            .then(data => data);
    }
    GetParmasVal(paramsstr)
    {
      let ParamsArray:any[]=[];
      if(paramsstr!=null && paramsstr!=undefined)
      {
        var result=decodeURIComponent(paramsstr);
        var NewCellData = result.split('&');
        if(NewCellData?.length>0)
        {
          NewCellData.map(e=>
            {
              ParamsArray.push({"FieldStr":e.split('=')[0],"FieldVal":e.split('=')[1]});
            });
        }
      }
      return ParamsArray;
    }
    
  getFallRiskAssessmentList() {

    return this.http.get<any>('assets/ui/data/falriskassessmentList.json').pipe(
      map(response => response.data as FallRiskAssessmentList[]))
  }
}