import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectFunctionComponent } from './inject-function.component';

describe('InjectFunctionComponent', () => {
  let component: InjectFunctionComponent;
  let fixture: ComponentFixture<InjectFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
