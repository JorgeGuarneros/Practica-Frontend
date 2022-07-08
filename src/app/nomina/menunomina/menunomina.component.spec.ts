import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunominaComponent } from './menunomina.component';

describe('MenunominaComponent', () => {
  let component: MenunominaComponent;
  let fixture: ComponentFixture<MenunominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenunominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenunominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
