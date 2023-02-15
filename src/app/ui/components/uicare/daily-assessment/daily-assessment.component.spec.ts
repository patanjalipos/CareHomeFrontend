import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAssessmentComponent } from './daily-assessment.component';

describe('DailyAssessmentComponent', () => {
  let component: DailyAssessmentComponent;
  let fixture: ComponentFixture<DailyAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
