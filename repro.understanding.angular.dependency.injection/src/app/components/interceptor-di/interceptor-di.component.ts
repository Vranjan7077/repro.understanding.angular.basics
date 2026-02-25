import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interceptor-di',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './interceptor-di.component.html',
  styleUrl: './interceptor-di.component.scss',
})
export class InterceptorDiComponent {
  private http = inject(HttpClient);

  response: any[] | null = null;

  makeRequest() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => {
        this.response = posts.sort(() => 0.5 - Math.random()).slice(0, 2);
      });
  }
}
