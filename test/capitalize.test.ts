import { capitalize } from '../src';

describe('capitalize(...)', () => {
  it('"sleepover" should return "Sleepover"', () => {
    expect(capitalize('sleepover')).toBe('Sleepover');
  });
  it('"hi Amanda" should return "Hi Amanda"', () => {
    expect(capitalize('hi Amanda')).toBe('Hi Amanda');
  });
  it('"" should return ""', () => {
    expect(capitalize('')).toBe('');
  });
});
