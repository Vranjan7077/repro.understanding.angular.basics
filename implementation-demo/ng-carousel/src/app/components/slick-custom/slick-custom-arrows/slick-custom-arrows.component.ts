import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SlickCarouselComponent as NgxSlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { ImageService } from '../../../service/image.service';
import { Image } from '../../../interface/image';

@Component({
  selector: 'app-slick-custom-arrows',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-custom-arrows.component.html',
  styleUrl: './slick-custom-arrows.component.scss',
})
export class SlickCustomArrowsComponent {
  @ViewChild('slickModal') slickModal?: NgxSlickCarouselComponent;

  readonly slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    speed: 1800,
    autoplaySpeed: 1800,
    arrows: false,
    cssEase: 'ease',
    dots: true,
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

  showPrevious(): void {
    this.slickModal?.slickPrev();
  }

  showNext(): void {
    this.slickModal?.slickNext();
  }
}
