import { isFunction } from '../src';

describe('isFunction(...)', () => {
  it('() => {} should be true', () => {
    expect(isFunction(() => {})).toBe(true);
  });
  it('{} should be false', () => {
    expect(isFunction({})).toBe(false);
  });
  it('[] should be false', () => {
    expect(isFunction([])).toBe(false);
  });
  it('null should be false', () => {
    expect(isFunction(null)).toBe(false);
  });
  it('undefined should be false', () => {
    expect(isFunction(undefined)).toBe(false);
  });
  it('"a string" should be false', () => {
    expect(isFunction('a string')).toBe(false);
  });
  it('true should be false', () => {
    expect(isFunction(true)).toBe(false);
  });
});
