import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DataView } from 'primeng/dataview';
import { ResidentList } from 'src/app/demo/classes/ResidentList';
import { CareService } from 'src/app/demo/service/CareServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residentlist',
  templateUrl: './residentlist.component.html',
  styleUrls: ['./residentlist.component.scss']
})
export class ResidentlistComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  residents: ResidentList[];
  viewMode: boolean = true;
  residentId: string = "";
  activeClass: string = "";
  constructor(private careService: CareService,private router: Router,) { }

  ngOnInit(): void {
    this.careService.getResidentList().then(data => this.residents = data);
    this.viewMode = true;
  }
  
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }
  residentClick(id) {
    this.residentId = id;
  }
  LoadResidentInfo(title,seq)
  {
    this.router.navigateByUrl("/uicare/residentprofile?title="+title+"&seq="+seq+"&rId="+this.residentId);
  }
}
