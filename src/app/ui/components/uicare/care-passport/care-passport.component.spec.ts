import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePassportComponent } from './care-passport.component';

describe('CarePassportComponent', () => {
  let component: CarePassportComponent;
  let fixture: ComponentFixture<CarePassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarePassportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarePassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
