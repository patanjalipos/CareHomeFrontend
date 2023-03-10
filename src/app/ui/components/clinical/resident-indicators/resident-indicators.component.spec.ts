import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentIndicatorsComponent } from './resident-indicators.component';

describe('ResidentIndicatorsComponent', () => {
  let component: ResidentIndicatorsComponent;
  let fixture: ComponentFixture<ResidentIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
