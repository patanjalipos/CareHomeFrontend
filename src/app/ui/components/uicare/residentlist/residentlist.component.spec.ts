import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentlistComponent } from './residentlist.component';

describe('ResidentlistComponent', () => {
  let component: ResidentlistComponent;
  let fixture: ComponentFixture<ResidentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
