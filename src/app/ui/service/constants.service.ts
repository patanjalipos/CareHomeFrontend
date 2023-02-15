import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  public IsLocal: boolean = false;
  public IsShowNavBar: boolean = true;
  public readonly BaseUriUser: string = 'http://localhost:34435/';
  public readonly BaseUriAdmin: string = 'http://localhost:36099/';
  public readonly BaseUriHome: string = 'http://localhost:18157/';

  
}

export enum UserTypes {
  SuperAdmin = "611b6d811003138c9d40a8b7",
  Admin = "607546c500f6f4c43c5d54a0",
  CallCenter = "611b73931003138c9d40a8b8",
  Doctor = "6075479300f6f4c43c5d54a2",
  Therapist = "60e5582069bec5646f115686",
  Meditation = "60ed26557f6bda738e03c049",
  Patient = "6075474600f6f4c43c5d54a1",
  Pathologist = "60ee67c8b43250ad3a1d362d",
  Cafeteria = "60e5597069bec5646f115688",
  GuestServiceAgent = "6253e3b1eea1dbcb7aae98a1",
  AdminDeo = "62678ac614091e1beade98e6",
  Finance="6331db25d3c986311dff200c",
  Billing="6396f00addc59e9aac93b137"
}
