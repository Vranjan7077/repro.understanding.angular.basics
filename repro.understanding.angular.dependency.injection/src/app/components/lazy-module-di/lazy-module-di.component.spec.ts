import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModuleDiComponent } from './lazy-module-di.component';

describe('LazyModuleDiComponent', () => {
  let component: LazyModuleDiComponent;
  let fixture: ComponentFixture<LazyModuleDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyModuleDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyModuleDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
