function areYouPlayingBanjo(name) {
  let string1 = name.split();
  if ((name.charAt(0) === "r") | (name.charAt(0) === "R")) {
    string1 = `${name} plays banjo`;
  } else {
    string1 = `${name} does not play banjo`;
  }
  return string1;
}
