import { isString } from '../src';

describe('isString(...)', () => {
  it('string should be true', () => {
    expect(isString('a string')).toBe(true);
  });
  it('number should be false', () => {
    expect(isString(123)).toBe(false);
  });
  it('bolean should be false', () => {
    expect(isString(false)).toBe(false);
  });
  it('Object should be false', () => {
    expect(isString({})).toBe(false);
  });
  it('Array should be true', () => {
    expect(isString([])).toBe(false);
  });
  it('Function should be false', () => {
    expect(isString(() => {})).toBe(false);
  });
});
