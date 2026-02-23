import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPipesComponent } from './number-pipes.component';

describe('NumberPipesComponent', () => {
  let component: NumberPipesComponent;
  let fixture: ComponentFixture<NumberPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
