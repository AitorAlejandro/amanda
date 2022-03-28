export function isNumber(value: any): boolean {
  return 'number' === typeof value && isFinite(value);
}
