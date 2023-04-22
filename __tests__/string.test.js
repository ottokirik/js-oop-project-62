import { describe, test, expect } from '@jest/globals';
import Validator from '../src/validator';

describe('String validators', () => {
  test('minLength', () => {
    const validator = new Validator();
    const scheme = validator.minLength(5);

    expect(scheme.isValid('Min')).toBe(false);
    expect(scheme.isValid('Min length 5')).toBe(true);
  });

  test('required', () => {
    const validator = new Validator();
    const scheme = validator.required();

    expect(scheme.isValid('')).toBe(false);
    expect(scheme.isValid('Min length 5')).toBe(true);
  });

  test('contains', () => {
    const validator = new Validator();
    const scheme = validator.contains('Min');

    expect(scheme.isValid('')).toBe(false);
    expect(scheme.isValid('Min length 5')).toBe(true);
  });
});
