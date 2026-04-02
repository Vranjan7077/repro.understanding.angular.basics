import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickCustomThumbnailGalleryComponent } from './slick-custom-thumbnail-gallery.component';

describe('SlickCustomThumbnailGalleryComponent', () => {
  let component: SlickCustomThumbnailGalleryComponent;
  let fixture: ComponentFixture<SlickCustomThumbnailGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCustomThumbnailGalleryComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SlickCustomThumbnailGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
