import { describe, expect, test } from '@jest/globals';
import Validator from '../src/validator';

describe('Number validators', () => {
  test('number', () => {
    const validator = new Validator();
    const scheme = validator.number();

    expect(scheme.isValid(0)).toBe(true);
    expect(scheme.isValid(null)).toBe(true);
  });

  test('required', () => {
    const validator = new Validator();
    const scheme = validator.number();

    expect(scheme.isValid(null)).toBe(true);
    expect(scheme.required().isValid(null)).toBe(false);
    expect(scheme.required().isValid(0)).toBe(true);
  });

  test('positive', () => {
    const validator = new Validator();
    const scheme = validator.number().positive();

    expect(scheme.isValid(0)).toBe(false);
    expect(scheme.isValid(-5)).toBe(false);
    expect(scheme.isValid(5)).toBe(true);
  });

  test('range', () => {
    const validator = new Validator();
    const scheme = validator.number();

    expect(scheme.range(-5, 5).isValid(0)).toBe(true);
    expect(scheme.range(0, 4).isValid(-5)).toBe(false);
    expect(scheme.range(3, 5).isValid(5)).toBe(true);
  });

  test('positive required', () => {
    const validator = new Validator();
    const scheme = validator.number().positive().required();

    expect(scheme.isValid(0)).toBe(false);
    expect(scheme.isValid(-5)).toBe(false);
    expect(scheme.isValid(null)).toBe(false);
  });
});
