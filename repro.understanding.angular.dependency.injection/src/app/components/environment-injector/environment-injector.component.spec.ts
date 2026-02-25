import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentInjectorComponent } from './environment-injector.component';

describe('EnvironmentInjectorComponent', () => {
  let component: EnvironmentInjectorComponent;
  let fixture: ComponentFixture<EnvironmentInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentInjectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
