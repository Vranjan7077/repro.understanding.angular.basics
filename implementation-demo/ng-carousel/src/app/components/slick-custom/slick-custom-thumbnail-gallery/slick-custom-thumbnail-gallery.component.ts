import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  SlickCarouselComponent as NgxSlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { Image } from '../../../interface/image';
import { ImageService } from '../../../service/image.service';

@Component({
  selector: 'app-slick-custom-thumbnail-gallery',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-custom-thumbnail-gallery.component.html',
  styleUrl: './slick-custom-thumbnail-gallery.component.scss',
})
export class SlickCustomThumbnailGalleryComponent {
  @ViewChild('mainSlider') mainSlider?: NgxSlickCarouselComponent;
  @ViewChild('thumbnailSlider') thumbnailSlider?: NgxSlickCarouselComponent;

  readonly mainSliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    speed: 450,
    cssEase: 'ease',
  };

  readonly thumbnailSliderConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    focusOnSelect: false,
    speed: 350,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  images: Image[] = [];
  activeIndex = 0;
  isLoading = true;
  errorMessage = '';

  constructor(private readonly imageService: ImageService) {
    const _window = window as any;
    _window.jQuery = _window.jQuery || _window.$;
    _window.$ = _window.$ || _window.jQuery;

    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Slider load error:', err);
        this.errorMessage = 'Unable to load live gallery images right now.';
        this.isLoading = false;
      },
    });
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
    this.mainSlider?.slickGoTo(index);
    this.thumbnailSlider?.slickGoTo(index);
  }

  handleMainAfterChange(event: { currentSlide: number }): void {
    this.activeIndex = event.currentSlide;
    this.thumbnailSlider?.slickGoTo(event.currentSlide);
  }

  showPrevious(): void {
    this.mainSlider?.slickPrev();
  }

  showNext(): void {
    this.mainSlider?.slickNext();
  }
}
