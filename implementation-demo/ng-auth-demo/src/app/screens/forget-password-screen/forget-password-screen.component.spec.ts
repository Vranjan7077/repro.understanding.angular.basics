import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordScreenComponent } from './forget-password-screen.component';

describe('ForgetPasswordScreenComponent', () => {
  let component: ForgetPasswordScreenComponent;
  let fixture: ComponentFixture<ForgetPasswordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
