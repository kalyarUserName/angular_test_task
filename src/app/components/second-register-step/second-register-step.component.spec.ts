import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRegisterStepComponent } from './second-register-step.component';

describe('SecondRegisterStepComponent', () => {
  let component: SecondRegisterStepComponent;
  let fixture: ComponentFixture<SecondRegisterStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRegisterStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondRegisterStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
