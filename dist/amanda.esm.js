function buildQuery(data) {
  var queryArray = [];

  var _loop = function _loop(property) {
    if (Array.isArray(data[property])) {
      var dataProperty = data[property];
      dataProperty.forEach(function (item) {
        queryArray.push([property, item]);
      });
    } else {
      queryArray.push([property, data[property]]);
    }
  };

  for (var property in data) {
    _loop(property);
  }

  var query = new URLSearchParams(queryArray).toString();
  return query;
}

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

function isFunction(value) {
  return 'function' == typeof value;
}

function isNull(value) {
  return null === value;
}

function isNumber(value) {
  return 'number' === typeof value && isFinite(value);
}

function isObject(value) {
  return typeof value === 'object' && !isArray(value) && !isNull(value);
}

function isPrimitive(val) {
  return Object(val) !== val;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export { buildQuery, capitalize, decapitalize, isArray, isBoolean, isEmptyArray, isFunction, isNull, isNumber, isObject, isPrimitive, isString };
//# sourceMappingURL=amanda.esm.js.map
