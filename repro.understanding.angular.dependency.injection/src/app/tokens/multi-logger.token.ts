import { InjectionToken } from '@angular/core';
import { MultiLogger } from '../models/logger.interface';

export const MULTI_LOGGER = new InjectionToken<MultiLogger[]>('MULTI_LOGGER');
