import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemMasterComponent } from './menu-item-master.component';

describe('MenuItemMasterComponent', () => {
  let component: MenuItemMasterComponent;
  let fixture: ComponentFixture<MenuItemMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
