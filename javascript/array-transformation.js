/**
Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

const deck = [1, 2, 3, 4, 10];
seeingDouble(deck);
// => [2, 4, 6, 8, 20]
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
  Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.
  
  const deck = [1, 3, 9, 3, 7];
  threeOfEachThree(deck);
  // => [1, 3, 3, 3, 9, 3, 3, 3, 7]
   */
export function threeOfEachThree(deck) {
  return deck.reduce((newDeck, card) => {
    if (card === 3) {
      newDeck.push(3, 3, 3);
    } else {
      newDeck.push(card);
    }
    return newDeck;
  }, []);
}

/**
  Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.
  
  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  middleTwo(deck);
  // => [5, 6]
   */
export function middleTwo(deck) {
  const middleIndex = Math.floor(deck.length / 2);
  return deck.slice(middleIndex - 1, middleIndex + 1);
}

/**
  Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.
  
  You can assume that the deck has an even number of cards.
  
  const deck = [1, 2, 3, 5, 6, 10];
  sandwichTrick(deck);
  // => [2, 3, 10, 1, 5, 6]
   */

export function sandwichTrick(deck) {
  const topCard = deck.shift();
  const bottomCard = deck.pop();
  const middleIndex = Math.floor(deck.length / 2);
  deck.splice(middleIndex, 0, bottomCard, topCard);
  return deck;
}

/**
  Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.
  
  const deck = [1, 2, 3, 4, 10, 2];
  twoIsSpecial(deck);
  // => [2, 2]
   */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
  Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.
  
  const deck = [10, 1, 5, 3, 2, 8, 7];
  perfectlyOrdered(deck);
  // => [1, 2, 3, 5, 7, 8, 10]
   */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
  Elyse wants to change the order of the cards in the deck. After the trick, the card that is currently at the top should end up at the bottom of the deck. The second card should end up second last etc.
  
  const deck = [10, 1, 5, 3, 2];
  reorder(deck);
  // => [2, 3, 5, 1, 10]
   */
export function reorder(deck) {
  return deck.reverse();
}
