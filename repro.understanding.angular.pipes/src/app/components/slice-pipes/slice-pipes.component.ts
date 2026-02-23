import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-slice-pipes',
  standalone: true,
  imports: [CommonModule, CardComponent, LoadingComponent],
  templateUrl: './slice-pipes.component.html',
  styleUrl: './slice-pipes.component.scss',
})
export class SlicePipesComponent implements OnInit {
  posts: any[] = [];

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 2).map((post) => ({
        ...post,
        sliceStart: Math.floor(Math.random() * 20),
        sliceEnd: Math.floor(Math.random() * 50) + 50,
      }));
    });
  }
}
