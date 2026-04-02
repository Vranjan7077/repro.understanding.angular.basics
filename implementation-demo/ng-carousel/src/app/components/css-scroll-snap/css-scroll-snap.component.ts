import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { Image } from '../../interface/image';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-css-scroll-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './css-scroll-snap.component.html',
  styleUrl: './css-scroll-snap.component.scss',
})
export class CssScrollSnapComponent implements OnDestroy {
  @ViewChild('scrollTrack', { static: false })
  scrollTrack?: ElementRef<HTMLElement>;

  images: Image[] = [];
  isLoading = true;
  errorMessage = '';
  activeIndex = 0;

  private scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  private boundScrollHandler = this.onScroll.bind(this);

  constructor(
    private readonly imageService: ImageService,
    private readonly ngZone: NgZone
  ) {
    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;

        setTimeout(() => this.attachScrollListener(), 100);
      },
      error: (err) => {
        console.error('Load error:', err);
        this.errorMessage = 'Unable to load images right now.';
        this.isLoading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.detachScrollListener();
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  scrollTo(index: number): void {
    const track = this.scrollTrack?.nativeElement;
    if (!track) return;

    const slides = track.querySelectorAll('.snap-slide');
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  }

  scrollPrev(): void {
    if (this.activeIndex > 0) {
      this.scrollTo(this.activeIndex - 1);
    }
  }

  scrollNext(): void {
    if (this.activeIndex < this.images.length - 1) {
      this.scrollTo(this.activeIndex + 1);
    }
  }

  get canGoPrev(): boolean {
    return this.activeIndex > 0;
  }

  get canGoNext(): boolean {
    return this.activeIndex < this.images.length - 1;
  }

  private attachScrollListener(): void {
    const track = this.scrollTrack?.nativeElement;
    if (!track) return;

    this.ngZone.runOutsideAngular(() => {
      track.addEventListener('scroll', this.boundScrollHandler, {
        passive: true,
      });
    });
  }

  private detachScrollListener(): void {
    const track = this.scrollTrack?.nativeElement;
    if (track) {
      track.removeEventListener('scroll', this.boundScrollHandler);
    }
  }

  private onScroll(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      const track = this.scrollTrack?.nativeElement;
      if (!track) return;

      const slides = track.querySelectorAll('.snap-slide');
      if (slides.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const distance = Math.abs(slideRect.left - trackRect.left);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== this.activeIndex) {
        this.ngZone.run(() => {
          this.activeIndex = closestIndex;
        });
      }
    }, 60);
  }
}
