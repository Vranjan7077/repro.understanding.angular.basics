import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  imports: [ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'repro.understanding.angular.httpclient';
}
