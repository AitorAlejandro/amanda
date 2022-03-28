import { isArray } from './isArray';
import { isNull } from './isNull';

export function isObject(value: any): boolean {
  return typeof value === 'object' && !isArray(value) && !isNull(value);
}
