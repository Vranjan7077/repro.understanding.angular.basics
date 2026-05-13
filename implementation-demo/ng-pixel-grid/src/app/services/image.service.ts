import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PicsumImage } from '../models/image.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService extends BaseApiService {
  private readonly apiUrl = 'https://picsum.photos/v2/list';

  getImages(page: number, limit: number): Observable<PicsumImage[]> {
    return this.get<PicsumImage[]>(
      `${this.apiUrl}?page=${page}&limit=${limit}`,
    );
  }

  getResizedImageUrl(
    id: string,
    width: number = 300,
    height: number = 200,
  ): string {
    return `https://picsum.photos/id/${id}/${width}/${height}`;
  }
}
