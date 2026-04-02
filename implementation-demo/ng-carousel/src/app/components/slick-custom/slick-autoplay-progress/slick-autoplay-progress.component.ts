import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  SlickCarouselComponent as NgxSlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { Image } from '../../../interface/image';
import { ImageService } from '../../../service/image.service';

@Component({
  selector: 'app-slick-autoplay-progress',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-autoplay-progress.component.html',
  styleUrl: './slick-autoplay-progress.component.scss',
})
export class SlickAutoplayProgressComponent {
  @ViewChild('slickModal') slickModal?: NgxSlickCarouselComponent;

  readonly autoplayDuration = 4000;

  readonly slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  images: Image[] = [];
  isLoading = true;
  errorMessage = '';
  currentSlide = 0;
  progressActive = false;
  isPaused = false;

  constructor(private readonly imageService: ImageService) {
    const _window = window as any;
    _window.jQuery = _window.jQuery || _window.$;
    _window.$ = _window.$ || _window.jQuery;

    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;

        setTimeout(() => (this.progressActive = true), 50);
      },
      error: (err) => {
        console.error('Slider load error:', err);
        this.errorMessage = 'Unable to load live carousel images right now.';
        this.isLoading = false;
      },
    });
  }

  handleBeforeChange(): void {
    this.progressActive = false;
  }

  handleAfterChange(event: { currentSlide: number }): void {
    this.currentSlide = event.currentSlide;
    setTimeout(() => (this.progressActive = true), 50);
  }

  togglePause(): void {
    if (this.isPaused) {
      this.slickModal?.slickPlay();
      this.isPaused = false;
      this.progressActive = true;
    } else {
      this.slickModal?.slickPause();
      this.isPaused = true;
      this.progressActive = false;
    }
  }

  showPrevious(): void {
    this.slickModal?.slickPrev();
  }

  showNext(): void {
    this.slickModal?.slickNext();
  }

  goToSlide(index: number): void {
    this.slickModal?.slickGoTo(index);
  }

  get totalSlides(): number {
    return this.images.length;
  }
}
