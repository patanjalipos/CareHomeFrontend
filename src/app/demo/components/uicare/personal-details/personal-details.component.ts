import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [
    MessageService
  ],
})
export class PersonalDetailsComponent implements OnChanges {
  @Input() tabid:string=null;

  activeIndex:number=0;
  valRadio1: string = "Buried";
  valRadio2: string = "No";
  valRadio3: string = "Traditional(wood)";
  valRadio4: string = "No";
  valRadio5: string = "No";
  date1: Date;
  date2: Date;
  ReviewDate: Date =new Date();
  NextReviewDate: Date =new Date();
  time1: Date;
  uploadedFiles: any[] = [];
  tblDNACPRHistory: any[] = [];
  constructor(private datePipe: DatePipe,private messageService: MessageService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void 
  {
    if(this.tabid!=null && this.tabid!=undefined)
    {
        this.activeIndex=parseInt(this.tabid)-1;
    }
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
AddDNACPR()
{
  var jsonObject = {
    "ReviewDate": this.ReviewDate,
    "NextReviewDate": this.NextReviewDate,
    "UpdatedBy": "Admin",
    "UpdatedDate": new Date(),

  }
  this.tblDNACPRHistory.push(jsonObject);

}
LoadDNACPRById(id)
{

}

}
