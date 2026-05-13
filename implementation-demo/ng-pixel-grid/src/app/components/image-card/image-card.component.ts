import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumImage, ImageLoadState } from '../../models/image.model';
import { ImageService } from '../../services/image.service';

const DEFAULT_IMAGE: PicsumImage = {
  id: '',
  author: '',
  width: 0,
  height: 0,
  url: '',
  download_url: '',
};

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent implements OnInit {
  @Input() image: PicsumImage = DEFAULT_IMAGE;

  loadState: ImageLoadState = 'loading';
  imageUrl = '';

  private retryCount = 0;
  private readonly maxRetries = 3;
  private readonly thumbnailSize = 80;
  private readonly minimumLoaderTime = 500;
  private loadStartedAt = Date.now();

  constructor(private readonly imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImage();
  }

  onImageError(): void {
    if (this.retryCount >= this.maxRetries) {
      this.loadState = 'error';
      return;
    }

    this.retryCount++;
    this.loadImage(true);
  }

  onImageLoad(): void {
    this.retryCount = 0;

    const elapsedTime = Date.now() - this.loadStartedAt;
    const remainingTime = Math.max(this.minimumLoaderTime - elapsedTime, 0);

    setTimeout(() => {
      this.loadState = 'loaded';
    }, remainingTime);
  }

  retryLoad(): void {
    this.retryCount = 0;
    this.loadState = 'loading';
    this.loadImage();
  }

  private loadImage(withRetryParam = false): void {
    this.loadStartedAt = Date.now();

    const url = this.imageService.getResizedImageUrl(
      this.image.id,
      this.thumbnailSize,
      this.thumbnailSize,
    );

    this.imageUrl = withRetryParam
      ? `${url}?retry=${this.retryCount}&t=${Date.now()}`
      : url;
  }
}
