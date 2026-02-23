import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPipesComponent } from './text-pipes.component';

describe('TextPipesComponent', () => {
  let component: TextPipesComponent;
  let fixture: ComponentFixture<TextPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
