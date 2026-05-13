import { Component } from '@angular/core';
import { ImageGridComponent } from './components/image-grid/image-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
