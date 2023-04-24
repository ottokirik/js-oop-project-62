import { describe, test, expect } from '@jest/globals';
import Validator from '../src/validator';

describe('String validators', () => {
  test('minLength', () => {
    const validator = new Validator();
    const scheme = validator.string();

    expect(scheme.minLength(5).isValid('Min')).toBe(false);
    expect(scheme.minLength(5).isValid('Min length 5')).toBe(true);
  });

  test('required', () => {
    const validator = new Validator();
    const scheme = validator.string();

    expect(scheme.required().isValid('')).toBe(false);
    expect(scheme.required().isValid('Min length 5')).toBe(true);
  });

  test('contains', () => {
    const validator = new Validator();
    const scheme = validator.string();

    expect(scheme.contains('Min').isValid('')).toBe(false);
    expect(scheme.contains('Min').isValid('Min length 5')).toBe(true);
    expect(scheme.contains('MAX').isValid('Min length 5')).toBe(false);
  });
});
