import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageService } from '../../service/image.service';
import { Image } from '../../interface/image';

@Component({
  selector: 'app-slick-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-carousel.component.html',
  styleUrl: './slick-carousel.component.scss',
})
export class SlickCarouselComponent {
  readonly slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 1400,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: 'ease',
    dots: false,
    fade: false,
    easing: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
