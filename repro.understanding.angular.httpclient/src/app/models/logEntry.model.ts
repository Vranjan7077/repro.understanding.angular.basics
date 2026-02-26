export interface LogEntry {
  type: 'request' | 'response' | 'error';
  message: string;
  timestamp: string;
}
