import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  public IsLocal: boolean = false;
  public IsShowNavBar: boolean = true;
  public readonly BaseUri: string = 'http://localhost:18157/';

}
