import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPowerOfAttorneyComponent } from './second-power-of-attorney.component';

describe('SecondPowerOfAttorneyComponent', () => {
  let component: SecondPowerOfAttorneyComponent;
  let fixture: ComponentFixture<SecondPowerOfAttorneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPowerOfAttorneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPowerOfAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
