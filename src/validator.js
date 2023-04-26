import NumberScheme from './schemes/number.scheme';
import StringScheme from './schemes/string.scheme';
import ArrayScheme from './schemes/array.scheme';

class Validator {
  schemes = {
    string: new StringScheme(),
    number: new NumberScheme(),
    array: new ArrayScheme(),
  };

  string() {
    return this.schemes.string;
  }

  number() {
    return this.schemes.number;
  }

  array() {
    return this.schemes.array;
  }
}

export default Validator;
