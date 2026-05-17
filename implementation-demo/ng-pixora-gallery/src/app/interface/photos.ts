export interface Photo {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string | null;
  exif?: PhotoExif | null;
  height: number;
  width: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: PhotoUser;
}

export interface PhotoExif {
  make: string | null;
  model: string | null;
  name: string | null;
  exposure_time: string | null;
  aperture: string | null;
  focal_length: string | null;
  iso: number | null;
}

export interface PhotoUser {
  id: string;
  name: string;
  username: string;
  portfolio_url: string | null;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    html: string;
    photos: string;
    self: string;
  };
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface UnsplashApiError {
  message: string;
  status?: number;
  details?: string[];
}
