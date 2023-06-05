import sizeofValidator from '../validators/sizeof.validator';
import arrayValidator from '../validators/array.validator';
import CoreScheme from './core.scheme';

export default class ArrayScheme extends CoreScheme {
  sizeof(length) {
    this.validators.sizeof = sizeofValidator(length);
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
