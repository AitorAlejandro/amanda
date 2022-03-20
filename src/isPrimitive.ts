export function isPrimitive(val: any) {
  return Object(val) !== val;
}
