import { Injectable } from '@angular/core';
import { MultiLogger } from '../models/logger.interface';

@Injectable({
  providedIn: 'root',
})
export class FileLoggerService implements MultiLogger {
  log(message: string): string {
    return `FileLogger: ${message}`;
  }
}
