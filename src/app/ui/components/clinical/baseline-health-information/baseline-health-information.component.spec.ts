import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineHealthInformationComponent } from './baseline-health-information.component';

describe('BaselineHealthInformationComponent', () => {
  let component: BaselineHealthInformationComponent;
  let fixture: ComponentFixture<BaselineHealthInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineHealthInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineHealthInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
