import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicePipesComponent } from './slice-pipes.component';

describe('SlicePipesComponent', () => {
  let component: SlicePipesComponent;
  let fixture: ComponentFixture<SlicePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlicePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlicePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
