import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryProviderComponent } from './factory-provider.component';

describe('FactoryProviderComponent', () => {
  let component: FactoryProviderComponent;
  let fixture: ComponentFixture<FactoryProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactoryProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoryProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
