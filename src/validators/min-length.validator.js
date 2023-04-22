export default (minLength) => (value) => typeof value === 'string' && value.length >= minLength;
