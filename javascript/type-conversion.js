// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */


export function twoSum(array1, array2) {
    const num1Str = array1.join('');
    const num2Str = array2.join('');
  
    const num1 = parseInt(num1Str, 10);
    const num2 = parseInt(num2Str, 10);
  
    return num1 + num2;
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    const numStr = String(value);
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
      if (input === undefined || input === null || input === '') {
      return 'Required field';
    }
  
    const num = Number(input);
  
    if (isNaN(num) || num === 0) {
      return 'Must be a number besides 0';
    }
  
    return '';
  }