function unique(arr) {
  return arr!='' ? Array.from(new Set(arr)): [];
}
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function flatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

exports.modules= { unique, cloneDeep, flatten };