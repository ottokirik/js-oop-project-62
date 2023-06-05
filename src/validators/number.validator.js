export default (value) =>
  (typeof value === 'number' && Number.isFinite(value)) || value === null || value === undefined;
