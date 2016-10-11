export function _objectWithoutProperties(obj, keys) {
  let target = {};
  for (let i in obj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    target[i] = obj[i];
  }
  return target;
}
