import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareService } from 'src/app/demo/service/CareServices';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-care-passport',
  templateUrl: './care-passport.component.html',
  styleUrls: ['./care-passport.component.scss'],
  providers: [
    MessageService
  ],
})
export class CarePassportComponent implements OnInit {
  rId:string=null;
  objPatient:any=<any>{};
  CarePassportObj:any=<any>{};
  uploadedFiles: any[] = [];

  constructor(private route: ActivatedRoute,private careService:CareService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
      {
        this.rId=params['rId'];
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

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
