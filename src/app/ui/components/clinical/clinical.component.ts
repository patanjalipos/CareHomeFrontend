import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.component.html',
  styleUrls: ['./clinical.component.scss']
})
export class ClinicalComponent implements OnInit {
  selecteduserid:any="3325faff-558d-4067-9c56-02e78dd06b26";
  selectedadmissionid:any="a24a3830-1b5e-4ce7-a8cd-df6de925ffa9";
  healthcareMode:string="view";
  constructor() { }

  ngOnInit(): void {
  }

}
