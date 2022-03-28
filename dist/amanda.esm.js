function capitalize(str) {
  return "" + str.charAt(0).toUpperCase() + str.slice(1);
}

function decapitalize(str) {
  return "" + str.charAt(0).toLowerCase() + str.slice(1);
}

function isArray(arr) {
  return Array.isArray(arr);
}

function isBoolean(value) {
  return 'boolean' == typeof value;
}

function isEmptyArray(arr) {
  if (isArray(arr)) {
    return arr.length === 0;
  }

  throw new Error('isEmptyArray: An array must be provided as an argument');
}

function isNull(value) {
  return null === value;
}

function isNumber(value) {
  return 'number' === typeof value && isFinite(value);
}

function isPrimitive(val) {
  return Object(val) !== val;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export { capitalize, decapitalize, isArray, isBoolean, isEmptyArray, isNull, isNumber, isPrimitive, isString };
//# sourceMappingURL=amanda.esm.js.map
