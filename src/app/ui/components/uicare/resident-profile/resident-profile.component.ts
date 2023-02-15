import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareService } from 'src/app/ui/service/CareServices';

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
  tabid:string=null;

  constructor(private careService: CareService, private route: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
    {
      this.title = params['title'];
      this.seq = params['seq'];
      this.rId=params['rId'];
    });

    this.route.queryParams.subscribe(params => 
    {
      var ParamsArray=this.careService.GetParmasVal(params['0']);
      if(ParamsArray?.length>0)
      {
        //console.log('ParamsArray',ParamsArray);
        this.title = ParamsArray.find(e=>e.FieldStr=='title')?.FieldVal;
        this.seq = ParamsArray.find(e=>e.FieldStr=='seq')?.FieldVal;
        this.rId = ParamsArray.find(e=>e.FieldStr=='rId')?.FieldVal;
        this.tabid = ParamsArray.find(e=>e.FieldStr=='tabid')?.FieldVal;
      }      
    });

    if(this.rId!=null && this.rId!="")
    {
      this.careService.getResidentList().then(data => this.objPatient = data.find(f=>f.ResidentId==this.rId));
    }
  }
  BacktoResidentList()
  {
    this.router.navigateByUrl('/uicare/residentlist');
  }
}
