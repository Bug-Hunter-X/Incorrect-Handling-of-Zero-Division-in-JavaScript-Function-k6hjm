function myFunc(a, b) {
  if (a === 0 || b === 0) { 
    return 0; // This line is incorrect. Should handle the case when either a or b is 0 separately.
  }
  return a / b; 
}

console.log(myFunc(10, 0)); // Throws error because of division by zero
console.log(myFunc(0, 5)); // Returns 0 as expected, but only due to the first condition.
console.log(myFunc(5, 2)); // Returns 2.5 as expected