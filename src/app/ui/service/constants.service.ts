import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  public IsLocal: boolean = false;
  public IsShowNavBar: boolean = true;
  public ActiveMenuName: string = "";

  // public readonly BaseURIFileServer: string = "https://hmstest.patanjaliwellness.com:31003/";
  // public readonly BaseUriUser: string = 'https://hmstest.patanjaliwellness.com:31008/user/';
  // public readonly BaseUriAdmin: string = 'https://hmstest.patanjaliwellness.com:31009/admin/';
  // public readonly BaseUriHome: string = 'https://hmstest.patanjaliwellness.com:31001/home/';
  
  public readonly BaseURIFileServer: string = "http://localhost:8080/";
  public readonly BaseUriUser: string = 'http://localhost:34435/';
  public readonly BaseUriAdmin: string = 'http://localhost:36099/';
  public readonly BaseUriHome: string = 'http://localhost:18157/';

  GetParmasVal(paramsstr)
  {
      let ParamsArray:any[]=[];
      if(paramsstr!=null && paramsstr!=undefined)
      {
        var result=decodeURIComponent(atob(paramsstr));
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
}




export enum UserTypes {
  SuperAdmin = 1,
  Admin = 2,
  Resident = 3
  // Doctor = "6075479300f6f4c43c5d54a2",
  // Therapist = "60e5582069bec5646f115686",
  // Meditation = "60ed26557f6bda738e03c049",
  // Patient = "6075474600f6f4c43c5d54a1",
  // Pathologist = "60ee67c8b43250ad3a1d362d",
  // Cafeteria = "60e5597069bec5646f115688",
  // GuestServiceAgent = "6253e3b1eea1dbcb7aae98a1",
  // AdminDeo = "62678ac614091e1beade98e6",
  // Finance="6331db25d3c986311dff200c",
  // Billing="6396f00addc59e9aac93b137"
}

export enum AdmissionStatus {
  Active = 1,
  Deceased = 2,
  Discharged = 3,
  Transferred = 4,
  WaitListed = 5,
  Suspended = 6,
  Unallocated = 7,
}

export enum TaskPlannerStatus {
  Open = 1,
  InProgress = 2,
  Done = 3,
}

export enum CustomDateFormat {
  DEF_DATE = "dd-MM-yyyy",
  DEF_DATE_TIME = "dd-MM-yyyy HH:mm",
  DEF_DATE_TIME_AMPM = "dd-MM-yyyy HH:mm a" ,
  CalendarFormat="dd-mm-yy" 
}