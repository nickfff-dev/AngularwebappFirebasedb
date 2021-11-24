import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLookupComponent } from './password-lookup.component';

describe('PasswordLookupComponent', () => {
  let component: PasswordLookupComponent;
  let fixture: ComponentFixture<PasswordLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
