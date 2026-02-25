import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonCptBComponent } from './singleton-cpt-b.component';

describe('SingletonCptBComponent', () => {
  let component: SingletonCptBComponent;
  let fixture: ComponentFixture<SingletonCptBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingletonCptBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonCptBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
