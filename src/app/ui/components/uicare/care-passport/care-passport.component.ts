import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareService } from 'src/app/ui/service/CareServices';

@Component({
  selector: 'app-care-passport',
  templateUrl: './care-passport.component.html',
  styleUrls: ['./care-passport.component.scss'] 
})
export class CarePassportComponent implements OnInit {
  rId:string=null;
  objPatient:any=<any>{};
  CarePassportObj:any=<any>{};
  uploadedFiles: any[] = [];
  constructor(private route: ActivatedRoute,private careService:CareService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
      {
        this.rId=params['rId'];
      });

      this.route.queryParams.subscribe(params => 
        {
          var ParamsArray=this.careService.GetParmasVal(params['0']);
          if(ParamsArray?.length>0)
          {
            this.rId = ParamsArray.find(e=>e.FieldStr=='rId')?.FieldVal;
          }      
        });

      if(this.rId!=null && this.rId!="")
      {
        this.careService.getResidentList().then(data => this.objPatient = data.find(f=>f.ResidentId==this.rId));
        this.CarePassportObj.name=this.objPatient.name;
      }
  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
   
}

}
