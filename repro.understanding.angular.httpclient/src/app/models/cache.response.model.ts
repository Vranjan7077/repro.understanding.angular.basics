import { User } from './user.model';

export interface CacheResponse {
  data: User[];
  source: 'cache' | 'api';
}
