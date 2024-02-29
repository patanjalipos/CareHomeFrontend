import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  selector: 'app-form-master',
  templateUrl: './form-master.component.html',
  styleUrls: ['./form-master.component.scss']
})
export class FormMasterComponent implements OnInit {

  //Utiliy Services
  constructor(private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,    
  ) {}

  ngOnInit(): void {
  }

}
