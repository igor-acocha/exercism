
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
    let total = 0;
    for (let count of birdsPerDay){
      total += count;
    }
    return total;
}
  
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
const startIndex = (week - 1) * 7; // Start of the week (zero-based index)
const endIndex = startIndex + 7;  // End of the week (exclusive)

let total = 0;
for (let i = startIndex; i < endIndex; i++) {
    total += birdsPerDay[i]; // Accumulate the bird count for the week
}

return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1; // Add the missing bird count on every second day (0-indexed)
}
return birdsPerDay; // Return the corrected array
}