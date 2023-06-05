import numberValidator from '../validators/number.validator';
import positiveValidator from '../validators/positive.validator';
import rangeValidator from '../validators/range.validator';
import CoreScheme from './core.scheme';

export default class NumberScheme extends CoreScheme {
  positive() {
    this.validators.positive = positiveValidator;
    return this;
  }

  range(min, max) {
    this.validators.range = rangeValidator(min, max);
    return this;
  }

  isValid(value) {
    const {
      validators: { required, positive, range },
    } = this;

    const isNumber = numberValidator(value);
    const isRequired = required ? required(value) : true;
    const isPositive = positive ? positive(value) : true;
    const isInRange = range ? range(value) : true;

    return isNumber && isPositive && isInRange && super.isValid(value) && isRequired;
  }
}
