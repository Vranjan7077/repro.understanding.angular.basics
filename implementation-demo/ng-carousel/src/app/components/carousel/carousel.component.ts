import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../interface/image';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  readonly images: Image[] = [
    {
      id: 1,
      title: 'Forest trail at sunrise',
      url: '/carousel-1.svg',
      thumbnailUrl: '/carousel-1.svg',
      author: 'Local demo',
    },
    {
      id: 2,
      title: 'City skyline in the evening',
      url: '/carousel-2.svg',
      thumbnailUrl: '/carousel-2.svg',
      author: 'Local demo',
    },
    {
      id: 3,
      title: 'Mountain lake with reflections',
      url: '/carousel-3.svg',
      thumbnailUrl: '/carousel-3.svg',
      author: 'Local demo',
    },
    {
      id: 4,
      title: 'Desert dunes under a clear sky',
      url: '/carousel-4.svg',
      thumbnailUrl: '/carousel-4.svg',
      author: 'Local demo',
    },
    {
      id: 5,
      title: 'Ocean waves on a bright day',
      url: '/carousel-5.svg',
      thumbnailUrl: '/carousel-5.svg',
      author: 'Local demo',
    },
  ];
  activeIndex = 0;

  onNext(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  onPrev(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  onSelect(index: number): void {
    this.activeIndex = index;
  }
}
