import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumImage, PaginationConfig } from '../../models/image.model';
import { ImageService } from '../../services/image.service';
import { ImageCardComponent } from '../image-card/image-card.component';
import { ImagePaginationComponent } from '../image-pagination/image-pagination.component';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule, ImageCardComponent, ImagePaginationComponent],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',
})
export class ImageGridComponent implements OnInit {
  allImages: PicsumImage[] = [];
  currentPageImages: PicsumImage[] = [];
  isLoading = true;
  errorMessage = '';
  readonly skeletonRows = Array(16).fill(0);

  readonly itemsPerPage = 16;
  private currentPage = 1;

  paginationConfig: PaginationConfig = {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: this.itemsPerPage,
    totalItems: 0,
  };

  constructor(private readonly imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.imageService.getImages(2, 100).subscribe({
      next: (images) => {
        this.allImages = images;
        this.updatePagination(1);
        this.isLoading = false;
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
    });
  }

  onPageChange(page: number): void {
    this.updatePagination(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  trackByImageId(_index: number, image: PicsumImage): string {
    return image.id;
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.allImages.length);
  }

  private updatePagination(page: number): void {
    this.currentPage = page;
    const totalPages = Math.ceil(this.allImages.length / this.itemsPerPage);

    this.paginationConfig = {
      currentPage: page,
      totalPages,
      itemsPerPage: this.itemsPerPage,
      totalItems: this.allImages.length,
    };

    this.currentPageImages = this.allImages.slice(
      this.startIndex,
      this.endIndex,
    );
  }
}
