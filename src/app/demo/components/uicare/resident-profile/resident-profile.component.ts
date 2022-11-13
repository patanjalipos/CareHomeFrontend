import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareService } from 'src/app/demo/service/CareServices';

@Component({
  selector: 'app-resident-profile',
  templateUrl: './resident-profile.component.html',
  styleUrls: ['./resident-profile.component.scss']
})
export class ResidentProfileComponent implements OnInit {
  ProfileImage:string=null;
  objPatient:any=<any>{};
  title:string=null;
  seq:string=null;
  rId:string=null;
  WholeString:string=null;

  constructor(private careService: CareService, private route: ActivatedRoute) { 
    // this.objPatient.FullName="Sean Sweeney";
    // this.objPatient.DateOfBirth="15-06-1956";
    // this.objPatient.RefNumber="49472974294924";
    // this.objPatient.ContactNumber="07557768852";
    // this.objPatient.BllodGroup="B+";
    // this.objPatient.Address="United Kingdom";
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
    {
      this.title = params['title'];
      this.seq = params['seq'];
      this.rId=params['rId'];
    });

    this.route.queryParams.subscribe(params => {
      var ParamsArray=this.careService.GetParmasVal(params['0']);
      if(ParamsArray?.length>0)
      {
        //console.log('ParamsArray',ParamsArray);
        this.title = ParamsArray.find(e=>e.FieldStr=='title')?.FieldVal;
        this.seq = ParamsArray.find(e=>e.FieldStr=='seq')?.FieldVal;
        this.rId = ParamsArray.find(e=>e.FieldStr=='rId')?.FieldVal;
      }      
    });

    if(this.rId!=null && this.rId!="")
    {
      this.careService.getResidentList().then(data => this.objPatient = data.find(f=>f.ResidentId==this.rId));
    }
  }
}
