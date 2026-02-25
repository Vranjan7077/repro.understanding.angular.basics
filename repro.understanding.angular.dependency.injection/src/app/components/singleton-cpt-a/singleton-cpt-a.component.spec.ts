import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonCptAComponent } from './singleton-cpt-a.component';

describe('SingletonCptAComponent', () => {
  let component: SingletonCptAComponent;
  let fixture: ComponentFixture<SingletonCptAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingletonCptAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonCptAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
