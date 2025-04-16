/**
Elyse wants to know the position (index) of a card in the stack.

const card = 2;
getCardPosition([9, 7, 3, 2], card);
// => 3
 */
export function getCardPosition(stack, card) {
    return stack.indexOf(card);
  }
  
  /**
  Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific number.
  
  const card = 3;
  doesStackIncludeCard([2, 3, 4, 5], card);
  // => true
   */
  export function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
  }
  
  /**
  Elyse wants to know if every card is even -- in other words, if each number in the stack is an even number.
  
  isEachCardEven([2, 4, 6, 7]);
  // => false
   */
  export function isEachCardEven(stack) {
    return stack.every(card => card % 2 === 0);
  }
  
  /**
  Elyse wants to know if there is an odd number in the stack.
  
  doesStackIncludeOddCard([3, 2, 6, 4, 8]);
  // => true
   */
  export function doesStackIncludeOddCard(stack) {
    return stack.some(card => card % 2 !== 0);
  }
  
  /**
  Elyse wants to know the value of the first card that is odd.
  
  getFirstOddCard([4, 2, 8, 7, 9]);
  // => 7
   */
  export function getFirstOddCard(stack) {
    return stack.find(card => card % 2 !== 0);
  }
  
  /**
  Elyse wants to know the position of the first card that is even.
  
  getFirstEvenCardPosition([5, 2, 3, 1]);
  // => 1
   */
  export function getFirstEvenCardPosition(stack) {
    return stack.findIndex(card => card % 2 === 0);
  }
  