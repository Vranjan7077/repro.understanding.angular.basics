import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProviderComponent } from './multi-provider.component';

describe('MultiProviderComponent', () => {
  let component: MultiProviderComponent;
  let fixture: ComponentFixture<MultiProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
