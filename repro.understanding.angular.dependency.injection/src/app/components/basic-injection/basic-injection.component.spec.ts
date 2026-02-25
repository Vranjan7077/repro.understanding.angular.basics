import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInjectionComponent } from './basic-injection.component';

describe('BasicInjectionComponent', () => {
  let component: BasicInjectionComponent;
  let fixture: ComponentFixture<BasicInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
