export function isPrimitive(val: any): boolean {
  return Object(val) !== val;
}
