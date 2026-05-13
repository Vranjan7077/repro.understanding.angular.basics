import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationConfig } from '../../models/image.model';

const DEFAULT_CONFIG: PaginationConfig = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 16,
  totalItems: 0,
};

@Component({
  selector: 'app-image-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-pagination.component.html',
  styleUrl: './image-pagination.component.scss',
})
export class ImagePaginationComponent {
  @Input() config: PaginationConfig = DEFAULT_CONFIG;
  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): number[] {
    return this.calculateVisiblePages();
  }

  goToPage(page: number): void {
    if (
      page >= 1 &&
      page <= this.config.totalPages &&
      page !== this.config.currentPage
    ) {
      this.pageChange.emit(page);
    }
  }

  trackByPage(_index: number, page: number): number {
    return page;
  }

  private calculateVisiblePages(): number[] {
    const { currentPage, totalPages } = this.config;

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set<number>();

    pages.add(1);
    pages.add(totalPages);

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.add(i);
    }

    const sorted = Array.from(pages).sort((a, b) => a - b);
    const result: number[] = [];

    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
        result.push(-1);
      }
      result.push(sorted[i]);
    }

    return result;
  }
}
