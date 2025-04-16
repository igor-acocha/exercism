

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export const kind = 'car';
export function needsLicense(kind) {
  if (kind=='car'||kind==='truck'){
    return true;
  }else{
    return false;
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export const option1 = 'Nivus';
export const option2 = 'T-cross';
export function chooseVehicle(option1, option2) {
  if(option1 < option2){
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */

export const originalPrice = 1000;
export const age = 3;
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8; // 80% of the original price for vehicles under 3 years old
  } else if (age > 10) {
    return originalPrice * 0.5; // 50% of the original price for vehicles older than 10 years
  } else {
    return originalPrice * 0.7; // 70% of the original price for vehicles between 3 and 10 years old
  }
}
