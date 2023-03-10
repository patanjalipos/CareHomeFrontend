import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPreferencesComponent } from './chart-preferences.component';

describe('ChartPreferencesComponent', () => {
  let component: ChartPreferencesComponent;
  let fixture: ComponentFixture<ChartPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
