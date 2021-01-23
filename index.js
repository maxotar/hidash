module.exports = {
  forEach(arr, fn) {
    for (let index in arr) {
      fn(arr[index], index);
    }
  },
  map(arr, fn) {
    const result = [];
    for (let index in arr) {
      result.push(fn(arr[index], index));
    }
    return result;
  },
};
