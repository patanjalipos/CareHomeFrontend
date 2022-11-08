import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ResidentList } from 'src/app/demo/classes/ResidentList';
import { CareService } from 'src/app/demo/service/CareServices';

@Component({
  selector: 'app-residentlist',
  templateUrl: './residentlist.component.html',
  styleUrls: ['./residentlist.component.scss']
})
export class ResidentlistComponent implements OnInit {
  residents!: ResidentList[];
  @ViewChild('filter') filter!: ElementRef;
  constructor(private careService: CareService) { }

  ngOnInit(): void {
    this.careService.getResidentList().then(data => this.residents = data);
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}

}
