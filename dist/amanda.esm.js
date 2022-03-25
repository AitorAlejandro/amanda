function capitalize(str) {
  return "" + str.charAt(0).toUpperCase() + str.slice(1);
}

function decapitalize(str) {
  return "" + str.charAt(0).toLowerCase() + str.slice(1);
}

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

export { capitalize, decapitalize, isArray, isEmptyArray, isPrimitive };
//# sourceMappingURL=amanda.esm.js.map
