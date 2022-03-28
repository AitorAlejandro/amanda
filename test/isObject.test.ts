import { isObject } from '../src';

describe('isObject(...)', () => {
  it('{} should be true', () => {
    expect(isObject({})).toBe(true);
  });
  it('undefined should be false', () => {
    expect(isObject(undefined)).toBe(false);
  });
  it('null should be false', () => {
    expect(isObject(null)).toBe(false);
  });
  it('[1, 2, 3] should be false', () => {
    expect(isObject([1, 2, 3])).toBe(false);
  });
  it('() => {} should be false', () => {
    expect(isObject(() => {})).toBe(false);
  });
  it('123 should be false', () => {
    expect(isObject(123)).toBe(false);
  });
  it('NaN should be false', () => {
    expect(isObject(NaN)).toBe(false);
  });
  it('true should be false', () => {
    expect(isObject(true)).toBe(false);
  });
});
