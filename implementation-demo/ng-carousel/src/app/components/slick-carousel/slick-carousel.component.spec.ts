import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickCarouselComponent } from './slick-carousel.component';

describe('SlickCarouselComponent', () => {
  let component: SlickCarouselComponent;
  let fixture: ComponentFixture<SlickCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCarouselComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
