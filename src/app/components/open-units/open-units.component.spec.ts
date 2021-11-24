import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenUnitsComponent } from './open-units.component';

describe('OpenUnitsComponent', () => {
  let component: OpenUnitsComponent;
  let fixture: ComponentFixture<OpenUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
