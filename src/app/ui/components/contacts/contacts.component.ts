import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  selecteduserid:any="3325faff-558d-4067-9c56-02e78dd06b26";
  selectedadmissionid:any="a24a3830-1b5e-4ce7-a8cd-df6de925ffa9";
  healthcareMode:string="view";
  constructor(private viewportScroller: ViewportScroller,) { }

  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
  ngOnInit(): void {
  }

}
