import { describe, expect } from '@jest/globals';
import Validator from '../src/validator';

describe('Array validators', () => {
  test('array', () => {
    const validator = new Validator();
    const scheme = validator.array();

    expect(scheme.isValid([])).toBe(true);
    expect(scheme.isValid(null)).toBe(true);
    expect(scheme.isValid('string')).toBe(false);
  });

  test('sizeof', () => {
    const validator = new Validator();
    const scheme = validator.array();

    expect(scheme.sizeof(0).isValid([])).toBe(true);
    expect(scheme.sizeof(1).isValid([1])).toBe(true);
    expect(scheme.sizeof(2).isValid([1, 2])).toBe(true);
    expect(scheme.sizeof(3).isValid([1, 2])).toBe(false);
    expect(scheme.sizeof(4).isValid(12)).toBe(false);
  });

  test('required', () => {
    const validator = new Validator();
    const scheme = validator.array();

    expect(scheme.required().isValid([])).toBe(true);
    expect(scheme.required().isValid(null)).toBe(false);
  });
});
