const falsy = ['', null, undefined];

export default (value) => !falsy.some((item) => item === value);
