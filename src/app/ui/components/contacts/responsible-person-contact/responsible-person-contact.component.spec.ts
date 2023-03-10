import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblePersonContactComponent } from './responsible-person-contact.component';

describe('ResponsiblePersonContactComponent', () => {
  let component: ResponsiblePersonContactComponent;
  let fixture: ComponentFixture<ResponsiblePersonContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiblePersonContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiblePersonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
