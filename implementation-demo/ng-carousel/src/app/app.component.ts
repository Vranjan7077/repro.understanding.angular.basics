import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlickCarouselComponent } from './components/slick-carousel/slick-carousel.component';
import { SlickCustomArrowsComponent } from './components/slick-custom/slick-custom-arrows/slick-custom-arrows.component';
import { SlickCustomPaginationComponent } from './components/slick-custom/slick-custom-pagination/slick-custom-pagination.component';
import { SlickCustomThumbnailGalleryComponent } from './components/slick-custom/slick-custom-thumbnail-gallery/slick-custom-thumbnail-gallery.component';
import { SlickCenterModeComponent } from './components/slick-custom/slick-center-mode/slick-center-mode.component';
import { SlickAutoplayProgressComponent } from './components/slick-custom/slick-autoplay-progress/slick-autoplay-progress.component';
import { SlickDynamicSlidesComponent } from './components/slick-custom/slick-dynamic-slides/slick-dynamic-slides.component';
import { CssScrollSnapComponent } from './components/css-scroll-snap/css-scroll-snap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CarouselComponent,
    SlickCarouselComponent,
    SlickCustomArrowsComponent,
    SlickCustomPaginationComponent,
    SlickCustomThumbnailGalleryComponent,
    SlickCenterModeComponent,
    SlickAutoplayProgressComponent,
    SlickDynamicSlidesComponent,
    CssScrollSnapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
