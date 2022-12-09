function abbrevName(name) {
  let arr = name.split(" ");
  let arr1 = arr[0].charAt(0).toUpperCase();
  let arr2 = arr[1].charAt(0).toUpperCase();
  arr = arr1 + ".".concat(arr2);
  return arr;
}
