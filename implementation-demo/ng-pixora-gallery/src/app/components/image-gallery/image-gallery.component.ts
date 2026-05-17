import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Photo, UnsplashApiError } from '../../interface/photos';
import { UnsplashService } from '../../service/unsplash.service';
import { ImageSearchComponent } from '../image-search/image-search.component';

@Component({
  selector: 'app-image-gallery',
  imports: [RouterLink, ImageSearchComponent],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent {
  photos: Photo[] = [];
  isLoading = false;
  errorMessage = '';
  searchTerm = '';

  private page = 1;
  private activeQuery = '';
  private hasLoadedRouteQuery = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unsplashService: UnsplashService,
  ) {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const query = (params.get('q') || '').trim();

      if (this.hasLoadedRouteQuery && query === this.activeQuery) {
        return;
      }

      this.hasLoadedRouteQuery = true;
      this.page = 1;
      this.activeQuery = query;
      this.searchTerm = query;
      this.photos = [];
      this.loadPhotos();
    });
  }

  get galleryQueryParams(): { q?: string } {
    return this.activeQuery ? { q: this.activeQuery } : {};
  }

  search(searchTerm: string): void {
    const query = searchTerm.trim();

    if (!query) {
      this.resetGallery();
      return;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }

  resetGallery(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    });
  }

  loadMore(): void {
    this.page += 1;
    this.loadPhotos();
  }

  private loadPhotos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const request$ = this.activeQuery
      ? this.unsplashService.searchPhotos(this.activeQuery, this.page)
      : this.unsplashService.getPhotos(this.page);

    request$.subscribe({
      next: (photos) => {
        this.photos = this.page === 1 ? photos : [...this.photos, ...photos];
        this.isLoading = false;
      },
      error: (error: UnsplashApiError) => {
        this.errorMessage = error.message;
        this.isLoading = false;
        this.page = Math.max(this.page - 1, 1);
      },
    });
  }
}
