/**
 * Factorial function
 *
 * @param n - factorial argument
 * @returns {number} n! = 1 * 2 * ... * n
 */

export const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
