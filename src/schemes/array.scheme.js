import sizeofValidator from '../validators/sizeof.validator';
import arrayValidator from '../validators/array.validator';
import requiredValidator from '../validators/required.validator';

export default class ArrayScheme {
  validators = {};

  sizeof(length) {
    this.validators.sizeof = sizeofValidator(length);
    return this;
  }

  required() {
    this.validators.required = requiredValidator;
    return this;
  }

  isValid(value) {
    const {
      validators: { sizeof, required },
    } = this;

    const isArray = arrayValidator(value);
    const isSizeof = sizeof ? sizeof(value) : true;
    const isRequired = required ? required(value) : true;

    return isArray && isSizeof && isRequired;
  }
}
