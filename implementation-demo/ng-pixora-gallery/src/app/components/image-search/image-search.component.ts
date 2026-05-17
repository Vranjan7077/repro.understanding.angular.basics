import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-search',
  imports: [FormsModule],
  templateUrl: './image-search.component.html',
  styleUrl: './image-search.component.scss',
})
export class ImageSearchComponent {
  @Input() isLoading = false;
  @Input() searchTerm = '';

  @Output() searchSubmitted = new EventEmitter<string>();
  @Output() resetClicked = new EventEmitter<void>();

  search(): void {
    this.searchSubmitted.emit(this.searchTerm);
  }

  reset(): void {
    this.searchTerm = '';
    this.resetClicked.emit();
  }
}
