import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugPipeComponent } from './debug-pipe.component';

describe('DebugPipeComponent', () => {
  let component: DebugPipeComponent;
  let fixture: ComponentFixture<DebugPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
