import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import {
  SlickCarouselComponent as NgxSlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { Image } from '../../../interface/image';
import { ImageService } from '../../../service/image.service';

type SlickAfterChangeEvent = {
  currentSlide: number;
};

@Component({
  selector: 'app-slick-custom-pagination',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-custom-pagination.component.html',
  styleUrl: './slick-custom-pagination.component.scss',
})
export class SlickCustomPaginationComponent {
  @ViewChild('slickModal') slickModal?: NgxSlickCarouselComponent;
  readonly slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    speed: 500,
    arrows: false,
    dots: false,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  images: Image[] = [];
  isLoading = true;
  errorMessage = '';
  currentSlide = 0;
  visibleSlides = 4;

  constructor(private readonly imageService: ImageService) {
    const _window = window as any;
    _window.jQuery = _window.jQuery || _window.$;
    _window.$ = _window.$ || _window.jQuery;

    this.updateVisibleSlides();

    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Slider load error:', err);
        this.errorMessage = 'Unable to load live carousel images right now.';
        this.isLoading = false;
      },
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateVisibleSlides();
  }

  get totalSlides(): number {
    return this.images.length;
  }

  get totalPositions(): number {
    return this.maxStartIndex + 1;
  }

  get displayPosition(): number {
    return Math.min(this.currentSlide + 1, this.totalPositions);
  }

  get canGoPrev(): boolean {
    return this.currentSlide > 0;
  }

  get canGoNext(): boolean {
    return this.currentSlide < this.maxStartIndex;
  }

  showPrevious(): void {
    if (!this.canGoPrev) {
      return;
    }

    this.slickModal?.slickPrev();
  }

  showNext(): void {
    if (!this.canGoNext) {
      return;
    }

    this.slickModal?.slickNext();
  }

  handleAfterChange(event: SlickAfterChangeEvent): void {
    this.currentSlide = event.currentSlide;
  }

  private get maxStartIndex(): number {
    return Math.max(this.totalSlides - this.visibleSlides, 0);
  }

  private updateVisibleSlides(): void {
    if (typeof window === 'undefined') {
      this.visibleSlides = 4;
      return;
    }

    const viewportWidth = window.innerWidth;

    if (viewportWidth < 520) {
      this.visibleSlides = 1;
      return;
    }

    if (viewportWidth < 720) {
      this.visibleSlides = 2;
      return;
    }

    if (viewportWidth < 1100) {
      this.visibleSlides = 4;
      return;
    }

    this.visibleSlides = 4;
  }
}
