import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryContactComponent } from './secondary-contact.component';

describe('SecondaryContactComponent', () => {
  let component: SecondaryContactComponent;
  let fixture: ComponentFixture<SecondaryContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
