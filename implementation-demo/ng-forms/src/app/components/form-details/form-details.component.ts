import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  mobile?: string;
}

@Component({
  selector: 'app-form-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.scss',
})
export class FormDetailsComponent implements OnInit {
  data: UserData | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      const serializedData = params['data'];

      try {
        this.data = serializedData ? JSON.parse(serializedData) : null;
      } catch (error) {
        console.error('Invalid JSON data', error);
        this.data = null;
      }
    });
  }
}
