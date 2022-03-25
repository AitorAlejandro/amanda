import { isArray } from './isArray';

export function isEmptyArray(arr: any): boolean {
  if (isArray(arr)) {
    return arr.length === 0;
  }
  throw new Error('isEmptyArray: An array must be provided as an argument');
}
