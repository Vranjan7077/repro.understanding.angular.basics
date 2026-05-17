import { Routes } from '@angular/router';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
ImageDetailsComponent;

export const routes: Routes = [
  {
    path: '',
    component: ImageGalleryComponent,
  },
  {
    path: 'photos/:id',
    component: ImageDetailsComponent,
  },
];
