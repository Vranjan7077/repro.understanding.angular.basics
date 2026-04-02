import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Image } from '../../../interface/image';
import { ImageService } from '../../../service/image.service';

@Component({
  selector: 'app-slick-dynamic-slides',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slick-dynamic-slides.component.html',
  styleUrl: './slick-dynamic-slides.component.scss',
})
export class SlickDynamicSlidesComponent {
  readonly slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    speed: 500,
    arrows: false,
    dots: true,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  images: Image[] = [];
  availableImages: Image[] = [];
  isLoading = true;
  errorMessage = '';
  private nextId = 1000;

  constructor(private readonly imageService: ImageService) {
    const _window = window as any;
    _window.jQuery = _window.jQuery || _window.$;
    _window.$ = _window.$ || _window.jQuery;

    this.imageService.getImages().subscribe({
      next: (allImages) => {
        this.images = allImages.slice(0, 3);
        this.availableImages = allImages.slice(3);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Slider load error:', err);
        this.errorMessage = 'Unable to load live carousel images right now.';
        this.isLoading = false;
      },
    });
  }

  addSlide(): void {
    if (this.availableImages.length > 0) {
      const newSlide = this.availableImages.shift()!;
      this.images = [...this.images, newSlide];
    } else {
      const id = this.nextId++;
      const dynamicSlide: Image = {
        id,
        title: `Dynamic Slide #${id}`,
        author: 'Runtime generated',
        url: `https://picsum.photos/seed/${id}/1200/675`,
        thumbnailUrl: `https://picsum.photos/seed/${id}/240/140`,
      };
      this.images = [...this.images, dynamicSlide];
    }
  }

  removeSlide(): void {
    if (this.images.length <= 1) {
      return;
    }

    const removed = this.images[this.images.length - 1];
    this.images = this.images.slice(0, -1);
    this.availableImages.unshift(removed);
  }

  get canRemove(): boolean {
    return this.images.length > 1;
  }

  get slideCount(): number {
    return this.images.length;
  }
}
