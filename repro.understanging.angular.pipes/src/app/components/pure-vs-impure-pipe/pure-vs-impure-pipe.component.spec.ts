import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureVsImpurePipeComponent } from './pure-vs-impure-pipe.component';

describe('PureVsImpurePipeComponent', () => {
  let component: PureVsImpurePipeComponent;
  let fixture: ComponentFixture<PureVsImpurePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureVsImpurePipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureVsImpurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
