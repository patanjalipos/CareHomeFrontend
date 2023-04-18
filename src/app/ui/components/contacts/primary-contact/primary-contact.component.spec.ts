import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryContactComponent } from './primary-contact.component';

describe('PrimaryContactComponent', () => {
  let component: PrimaryContactComponent;
  let fixture: ComponentFixture<PrimaryContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
