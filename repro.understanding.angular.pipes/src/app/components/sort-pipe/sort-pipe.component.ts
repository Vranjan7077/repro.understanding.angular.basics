import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { SortPipePipe } from '../../pipes/sort-pipe.pipe';
import { UserServiceService } from '../../services/user-service.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-sort-pipe',
  standalone: true,
  imports: [CommonModule, CardComponent, SortPipePipe],
  templateUrl: './sort-pipe.component.html',
  styleUrl: './sort-pipe.component.scss',
})
export class SortPipeComponent implements OnInit {
  todos: Todo[] = [];
  sortField: keyof Todo = 'completed';

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data.slice(0, 10);
    });
  }

  setSortField(field: keyof Todo) {
    this.sortField = field;
  }
}
