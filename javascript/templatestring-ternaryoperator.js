export function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`
  }
  
  export function buildBirthdaySign(age) {
    return `Happy Birthday! ${age >= 50 ? 'What a mature fellow you are.' : 'What a young fellow you are.'}`
  }

  
  export function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`;
  }
  
  export function costOf(sign, currency) {
  /**  const basePrice = 20;
    const letterCost = 2;
    const numberOfCharacters = sign.length;
  
    const totalCost = basePrice + (numberOfCharacters * letterCost);
    const formattedCost = totalCost.toFixed(2);
  
    return `Your sign costs ${formattedCost} ${currency}.`;*/
    return `Your sign costs ${(20 + (sign.length * 2)).toFixed(2)} ${currency}.`;
  }