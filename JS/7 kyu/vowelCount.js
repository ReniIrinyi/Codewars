function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsfromStr = 0;
  vowels.forEach((vowel) => {
    Array.from(str).filter((letter) => {
      letter === vowel ? vowelsfromStr++ : "";
    });
  });
  return vowelsfromStr;
}

getCount("hallobellottuuu");
