import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Image } from '../../../interface/image';
import { ImageService } from '../../../service/image.service';

@Component({
  selector: 'app-slick-center-mode',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-center-mode.component.html',
  styleUrl: './slick-center-mode.component.scss',
})
export class SlickCenterModeComponent {
  readonly slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  images: Image[] = [];
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
        this.errorMessage = 'Unable to load live carousel images right now.';
        this.isLoading = false;
      },
    });
  }
}
