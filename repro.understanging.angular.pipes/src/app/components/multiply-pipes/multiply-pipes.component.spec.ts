import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyPipesComponent } from './multiply-pipes.component';

describe('MultiplyPipesComponent', () => {
  let component: MultiplyPipesComponent;
  let fixture: ComponentFixture<MultiplyPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplyPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplyPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
