import { notify } from './notifier';
import { order } from './grocer';

/**
The portal should notify your customer if their order was successful. Define the onSuccess callback function that will be called if the order was successful due to the grocer having enough fruit in stock. This function should invoke the imported notify function, passing { message: 'SUCCESS' } to let your customer know that their order was successful.

onSuccess();
// => `notify` called with `{ message: 'SUCCESS' }`
 */
export function onSuccess() {
    notify({ message: 'SUCCESS' });
}

/**
The portal should notify your customer if their order was unsuccessful. Define the onError callback function that will be called if the order was unsuccessful because the grocer does not have the fruit in stock or there was an error. This function should invoke the imported notify function, passing { message: 'ERROR' } to let your customer know that their order was unsuccessful.

onError();
// => `notify` called with `{ message: 'ERROR' }`
 */

export function onError() {
  notify({ message: 'ERROR' });
}

/**
Fruit orders are placed through the grocer's API via the provided order function. This function receives three arguments: a query, containing the variety and quantity of fruit requested, a callback function to be invoked when the order is successful, and a callback function to be invoked when the order encounters an error.

You want to insulate your codebase from potential external changes and decide to wrap the call to the order function inside a new function named orderFromGrocer. Implement the orderFromGrocer function that attempts to place an order via a call to the grocer's API order function, making sure to forward the arguments passed into orderFromGrocer to the API call.

The query takes the form of an object:

const query = {
  variety: string,
  quantity: number,
};
orderFromGrocer(
  { variety: 'pear', quantity: 12 },
  exampleSuccessCallback,
  exampleErrorCallback,
);
// => `order` was called with the query and the callbacks
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

/**
Your customers are now able to place fruit orders via your portal, however, you notice that you are invoking the orderFromGrocer function in many different places across your codebase, each time having to pass in a query and the two callback functions as arguments. Seeing an opportunity to refactor your code, you think it would be simpler if you could place an order by just passing the variety and quantity of fruit required. Define the postOrder helper function that takes variety and quantity as arguments and attempts to place an order with the grocer.

postOrder('peach', 100);
// => order placed for 100 peaches
 */

export function postOrder(variety, quantity) {
  const query = {
    variety: variety,
    quantity: quantity,
  };

  orderFromGrocer(query, onSuccess, onError);
  console.log(`order placed for ${quantity} ${variety}${quantity > 1 ? 'es' : ''}`);
}