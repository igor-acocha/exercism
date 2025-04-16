export const ratePerHour = 89;
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export const budget = 20000;
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export const discount = 0.42;
export const numDays = 230;

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = dayRate(ratePerHour); //712
  const fullMonths = Math.floor(numDays / 22); // Each full month has 22 billable days //10.45
  const remainingDays = numDays % 22; //10

  const discountedMonthlyCost = fullMonths * 22 * dailyRate * (1 - discount); //90851.2
  const remainingCost = remainingDays * dailyRate; //7120

  return Math.ceil(discountedMonthlyCost + remainingCost); // 97971,20
}
