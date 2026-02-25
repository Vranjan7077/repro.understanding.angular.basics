import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorDiComponent } from './interceptor-di.component';

describe('InterceptorDiComponent', () => {
  let component: InterceptorDiComponent;
  let fixture: ComponentFixture<InterceptorDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
