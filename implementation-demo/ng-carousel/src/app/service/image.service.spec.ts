import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ImageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should map picsum photos into carousel images', () => {
    service.getImages().subscribe((images) => {
      expect(images.length).toBe(1);
      expect(images[0].author).toBe('Alejandro Escamilla');
      expect(images[0].url).toContain('/id/10/1200/675');
      expect(images[0].thumbnailUrl).toContain('/id/10/240/140');
    });

    const request = httpMock.expectOne(
      'https://picsum.photos/v2/list?page=1&limit=8',
    );

    request.flush([
      {
        id: '10',
        author: 'Alejandro Escamilla',
        download_url: 'https://picsum.photos/id/10/2500/1667',
      },
    ]);
  });
});
