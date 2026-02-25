import { Injectable } from '@angular/core';
import { MultiLogger } from '../models/logger.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggerService implements MultiLogger {
  log(message: string): string {
    return `ConsoleLogger: ${message}`;
  }
}
