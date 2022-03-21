import { isArray } from '../src';

describe('isArray(...)', () => {
  it('undefined should be false', () => {
    expect(isArray(null)).toBe(false);
  });
  it('null should be false', () => {
    expect(isArray(null)).toBe(false);
  });
  it('string should be false', () => {
    expect(isArray('a string')).toBe(false);
  });
  it('number should be false', () => {
    expect(isArray(123)).toBe(false);
  });
  it('bolean should be false', () => {
    expect(isArray(false)).toBe(false);
  });
  it('Object should be false', () => {
    expect(isArray({})).toBe(false);
  });
  it('Array should be true', () => {
    expect(isArray([])).toBe(true);
  });
  it('Function should be false', () => {
    expect(isArray(() => {})).toBe(false);
  });
  it('Set instance should be false', () => {
    expect(isArray(new Set())).toBe(false);
  });
});
