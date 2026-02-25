import { Injectable, Inject, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logs: any[] = [];
  private id = Math.random();
  private apiUrl: string;

  constructor(@Optional() @Inject('API_URL') apiUrl?: string) {
    this.apiUrl = apiUrl ?? 'https://jsonplaceholder.typicode.com';
  }

  log(message: string, context: 'Auth' | 'Error' | 'Default' = 'Default') {
    const timestamp = new Date().toLocaleTimeString();

    const styles = {
      Auth: 'background: #222; color: #bada55; padding: 2px 5px; border-radius: 3px;',
      Error:
        'background: #ff0000; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 3px;',
      Default:
        'background: #eee; color: #333; padding: 2px 5px; border-radius: 3px;',
    };

    const currentStyle = styles[context] || styles.Default;

    console.log(
      `%c${context}%c [${this.apiUrl}] [${timestamp}] ${message}`,
      currentStyle,
      'color: #888; font-style: italic;',
    );

    this.logs.unshift({ timestamp, message, type: context, url: this.apiUrl });
  }

  getHistory() {
    return this.logs;
  }
  getId() {
    return this.id;
  }
  getApiUrl() {
    return this.apiUrl;
  }
}
