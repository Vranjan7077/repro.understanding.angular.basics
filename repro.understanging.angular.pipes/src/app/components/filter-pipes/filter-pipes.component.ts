import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-filter-pipes',
  imports: [
    CommonModule,
    FormsModule,
    FilterPipe,
    CardComponent,
    LoadingComponent,
  ],
  templateUrl: './filter-pipes.component.html',
  styleUrl: './filter-pipes.component.scss',
})
export class FilterPipesComponent implements OnInit {
  searchText = '';
  users: any[] = [];
  isLoading = true;
  error = '';

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.slice(0, 2);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again.';
        this.isLoading = false;
      },
    });
  }
}
