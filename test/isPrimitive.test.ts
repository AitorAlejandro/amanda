import { isPrimitive } from '../src';

describe('isPrimitive(...)', () => {
  it('undefined should be true', () => {
    expect(isPrimitive(null)).toBe(true);
  });
  it('null should be true', () => {
    expect(isPrimitive(null)).toBe(true);
  });
  it('string should be true', () => {
    expect(isPrimitive('a string')).toBe(true);
  });
  it('number should be true', () => {
    expect(isPrimitive(123)).toBe(true);
  });
  it('bolean should be true', () => {
    expect(isPrimitive(false)).toBe(true);
  });
  it('Object should be false', () => {
    expect(isPrimitive({})).toBe(false);
  });
  it('Array should be false', () => {
    expect(isPrimitive([])).toBe(false);
  });
  it('Function should be false', () => {
    expect(isPrimitive(() => {})).toBe(false);
  });
  it('Set instance should be false', () => {
    expect(isPrimitive(new Set())).toBe(false);
  });
});
