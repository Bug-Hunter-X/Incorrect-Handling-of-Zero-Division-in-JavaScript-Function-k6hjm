function myFunc(a, b) {
  if (b === 0) {
    if (a === 0) {
      return NaN; // Handle a/0 which gives NaN
    } else if (a > 0) {
      return Infinity; // Handle a/0 where a is positive
    } else {
      return -Infinity; // Handle a/0 where a is negative
    }
  } else if (a === 0) {
    return 0; // Handle 0/b
  } else {
    return a / b; 
  }
}

console.log(myFunc(10, 0)); // Infinity
console.log(myFunc(0, 5)); // 0
console.log(myFunc(5, 2)); // 2.5
console.log(myFunc(0,0)); // NaN
console.log(myFunc(-5,0)); // -Infinity