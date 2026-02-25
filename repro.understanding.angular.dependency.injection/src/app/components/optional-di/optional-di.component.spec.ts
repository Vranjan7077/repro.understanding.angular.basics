import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalDiComponent } from './optional-di.component';

describe('OptionalDiComponent', () => {
  let component: OptionalDiComponent;
  let fixture: ComponentFixture<OptionalDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionalDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
