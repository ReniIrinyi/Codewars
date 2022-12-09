"use strict";
function spinWords(string) {
  const randomNr = Math.trunc(Math.random() * 4) + 1;
  const reverse = string.split(" ").flatMap((e) => {
    return e.split("").reverse().join().replaceAll(",", "");
  });
  let str = string.split(" ");
  str[randomNr] = reverse[randomNr];
  return str.join().replaceAll(",", " ");
}
spinWords("This is my megaguete Test");


