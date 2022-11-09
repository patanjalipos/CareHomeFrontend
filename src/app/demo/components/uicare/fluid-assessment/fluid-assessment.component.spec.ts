import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidAssessmentComponent } from './fluid-assessment.component';

describe('FluidAssessmentComponent', () => {
  let component: FluidAssessmentComponent;
  let fixture: ComponentFixture<FluidAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluidAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
