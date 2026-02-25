import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInjectionComponent } from './token-injection.component';

describe('TokenInjectionComponent', () => {
  let component: TokenInjectionComponent;
  let fixture: ComponentFixture<TokenInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
