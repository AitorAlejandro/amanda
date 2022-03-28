import { isNull } from '../src';

describe('isPrimitive(...)', () => {
  it('null should be true', () => {
    expect(isNull(null)).toBe(true);
  });
  it('undefined should be false', () => {
    expect(isNull(undefined)).toBe(false);
  });
  it('0 should be false', () => {
    expect(isNull(0)).toBe(false);
  });
  it('123 should be false', () => {
    expect(isNull(0)).toBe(false);
  });
  it('"" should be false', () => {
    expect(isNull('')).toBe(false);
  });
  it('"a string" should be false', () => {
    expect(isNull('a string')).toBe(false);
  });
  it('{} should be false', () => {
    expect(isNull({})).toBe(false);
  });
  it('[] should be false', () => {
    expect(isNull([])).toBe(false);
  });
  it('Function should be false', () => {
    expect(isNull(() => {})).toBe(false);
  });
});
