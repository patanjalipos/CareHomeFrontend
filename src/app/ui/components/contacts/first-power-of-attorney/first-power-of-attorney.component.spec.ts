import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPowerOfAttorneyComponent } from './first-power-of-attorney.component';

describe('FirstPowerOfAttorneyComponent', () => {
  let component: FirstPowerOfAttorneyComponent;
  let fixture: ComponentFixture<FirstPowerOfAttorneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPowerOfAttorneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPowerOfAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
