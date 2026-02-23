import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-custom-pipes',
  imports: [CommonModule, CapitalizePipe, CardComponent, LoadingComponent],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss',
})
export class CustomPipesComponent implements OnInit {
  posts: any[] = [];

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 2);
    });
  }
}
