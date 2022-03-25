function isArray(arr) {
  return Array.isArray(arr);
}

function isEmptyArray(arr) {
  if (isArray(arr)) {
    return arr.length === 0;
  }

  throw new Error('isEmptyArray: An array must be provided as an argument');
}

function isPrimitive(val) {
  return Object(val) !== val;
}

export { isArray, isEmptyArray, isPrimitive };
//# sourceMappingURL=amanda.esm.js.map
