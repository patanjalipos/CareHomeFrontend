import { Component, OnInit } from '@angular/core';
import { ResidentList } from 'src/app/demo/classes/ResidentList';
import { CareService } from 'src/app/demo/service/CareServices';

@Component({
  selector: 'app-residentlist',
  templateUrl: './residentlist.component.html',
  styleUrls: ['./residentlist.component.scss']
})
export class ResidentlistComponent implements OnInit {
  residents!: ResidentList[];
  constructor(private careService: CareService) { }

  ngOnInit(): void {
    this.careService.getResidentList().then(data => this.residents = data);
  }

}
