import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickDynamicSlidesComponent } from './slick-dynamic-slides.component';

describe('SlickDynamicSlidesComponent', () => {
  let component: SlickDynamicSlidesComponent;
  let fixture: ComponentFixture<SlickDynamicSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickDynamicSlidesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickDynamicSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
