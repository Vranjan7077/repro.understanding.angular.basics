import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Image } from '../interface/image';

interface PicsumPhoto {
  id: string;
  author: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly apiUrl = 'https://picsum.photos/v2/list?page=1&limit=8';

  constructor(private readonly http: HttpClient) {}

  getImages(): Observable<Image[]> {
    return this.http.get<PicsumPhoto[]>(this.apiUrl).pipe(
      map((photos) =>
        photos.map((photo) => ({
          id: Number(photo.id),
          title: `Photo by ${photo.author}`,
          author: photo.author,
          url: `https://picsum.photos/id/${photo.id}/1200/675`,
          thumbnailUrl: `https://picsum.photos/id/${photo.id}/240/140`,
        })),
      ),
    );
  }
}
