import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickCenterModeComponent } from './slick-center-mode.component';

describe('SlickCenterModeComponent', () => {
  let component: SlickCenterModeComponent;
  let fixture: ComponentFixture<SlickCenterModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCenterModeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCenterModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
