/**
 Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.

const deck = [5, 9, 7, 1, 8];

getFirstCard(deck);
// => 5
 */
export function getFirstCard(deck) {
    const [firstCard] = deck;
    return firstCard;
  }
  
  /**
  Elyse performs sleight of hand and summons the second card in the deck without using the array[index].
  
  const deck = [3, 2, 10, 6, 7];
  
  getSecondCard(deck);
  // => 2
   */
  export function getSecondCard(deck) {
    const [, secondCard] = deck;
    return secondCard;
  }
  
  /**
  Elyse will make the top two cards of the deck switch places. She doesn't need to call a single function.
  
  const deck = [10, 7, 3, 8, 5];
  
  swapTopTwoCards(deck);
  // => [7, 10, 3, 8, 5]
   */
  export function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
    return deck;
  }
  
  /**
  Elyse will separate the deck into two piles. The first pile will contain only the top card of the original deck, while the second pile will contain all the other cards.
  
  const deck = [2, 5, 4, 9, 3];
  
  discardTopCard(deck);
  // => [2, [5, 4, 9, 3]]
   */
  export function discardTopCard(deck) {
    if (deck.length === 0) {
      return [];
    }
  
    const [topCard, ...restOfDeck] = deck;
    return [topCard, restOfDeck];
  }
  
  /** @type {Card[]} **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  /**
  Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck such that they become the second, third, and fourth cards, respectively.
  
  const deck = [5, 4, 7, 10];
  
  insertFaceCards(deck);
  // => [5, 'jack', 'queen', 'king', 4, 7, 10]
   */
  export function insertFaceCards(deck) {
    const [firstCard, ...restOfDeck] = deck;
    return [firstCard, 'jack', 'queen', 'king', ...restOfDeck];
  }