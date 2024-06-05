function transformString(str) {
  let length = str.length;
  let result = "";

  // Reverse the string
  if (length % 3 === 0) {
    result = str.split("").reverse().join("");
  }

  // Replace each character with its ASCII code
  if (length % 5 === 0) {
    result = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // Perform both operations: reverse the string and replace each character with its ASCII code
  if (length % 15 === 0) {
    result = str.split("").reverse().join("");
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return result;
}

// For Testing the function
console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
