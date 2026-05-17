import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo, UnsplashApiError } from '../../interface/photos';
import { UnsplashService } from '../../service/unsplash.service';

@Component({
  selector: 'app-image-details',
  imports: [RouterLink],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.scss',
})
export class ImageDetailsComponent implements OnInit {
  @HostBinding('style.--page-color') pageColor = '#f6f8f6';

  photo: Photo | null = null;
  isLoading = true;
  errorMessage = '';
  searchQuery = '';

  constructor(
    private route: ActivatedRoute,
    private unsplashService: UnsplashService,
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('id');
    this.searchQuery = (
      this.route.snapshot.queryParamMap.get('q') || ''
    ).trim();

    if (!photoId) {
      this.errorMessage = 'Photo id is missing.';
      this.isLoading = false;
      return;
    }

    this.unsplashService.getPhotoById(photoId).subscribe({
      next: (photo) => {
        console.log('Photo details loaded:', photo);
        this.photo = photo;
        this.setPageColor(photo.color);
        this.isLoading = false;
      },
      error: (error: UnsplashApiError) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  getPhotoDescription(photo: Photo): string {
    return photo.description || photo.alt_description || 'Untitled photo';
  }

  get galleryQueryParams(): { q?: string } {
    return this.searchQuery ? { q: this.searchQuery } : {};
  }

  private setPageColor(color: string): void {
    this.pageColor = color || '#f6f8f6';
  }
}
