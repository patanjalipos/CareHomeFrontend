import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-forms-dashboard',
    templateUrl: './forms-dashboard.component.html',
    styleUrls: ['./forms-dashboard.component.scss'],
})
export class FormsDashboardComponent implements OnInit {
    //Tab 1 Data
    stlststatus: any[] = [];
    status: number;
    //Tab 2 Data
    date1: Date | undefined;
    date2: Date | undefined;

    constructor() {
        this.stlststatus = [
            { name: 'Active', code: 1 },
            { name: 'Inactive', code: 0 },
        ];
    }

    ngOnInit() {}
}
