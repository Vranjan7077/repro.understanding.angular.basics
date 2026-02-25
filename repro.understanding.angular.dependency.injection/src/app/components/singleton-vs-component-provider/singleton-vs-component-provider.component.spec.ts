import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonVsComponentProviderComponent } from './singleton-vs-component-provider.component';

describe('SingletonVsComponentProviderComponent', () => {
  let component: SingletonVsComponentProviderComponent;
  let fixture: ComponentFixture<SingletonVsComponentProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingletonVsComponentProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonVsComponentProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
