# Incorrect Handling of Zero Division in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrectly handling division by zero.  The original `myFunc` function attempts to handle zero inputs, but it does so in a way that throws an error when the denominator is zero. The solution shows how to handle these cases more robustly. 

## Bug Description

The `myFunc` function is intended to divide `a` by `b`. However, the current implementation doesn't correctly handle cases where `b` is zero, leading to an error.  Also, the intended handling for `a` being zero is inaccurate because it will return 0 regardless of `b` being 0 or not.

## Solution

The corrected function in `bugSolution.js` now explicitly checks for zero values in both `a` and `b`, returning appropriate values (0, Infinity, or NaN) to avoid errors. The behavior is defined for all possible inputs.