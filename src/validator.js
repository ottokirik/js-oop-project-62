import NumberScheme from './schemes/number.scheme';
import StringScheme from './schemes/string.scheme';

class Validator {
  schemes = {};

  string() {
    this.schemes.string = new StringScheme();
    return this.schemes.string;
  }

  number() {
    this.schemes.number = new NumberScheme();
    return this.schemes.number;
  }
}

export default Validator;
