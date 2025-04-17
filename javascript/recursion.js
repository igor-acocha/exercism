/**
Provided the pizza's name as the first argument, and an unlimited number of added options, calculate the price of the pizza in dollars.

pizzaPrice('Margherita');
// => 7

pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings');
// => 12

pizzaPrice(
  'Caprese',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
);
// => 17
 */
export function pizzaPrice(pizza, ...extras) {
    const basePrices = {
      'Margherita': 7,
      'Caprese': 9,
      'Formaggio': 10,
    };
  
    const extraOptionPrices = {
      'ExtraSauce': 1,
      'ExtraToppings': 2,
    };
  
    const basePrice = basePrices[pizza];
  
    if (basePrice === undefined) {
      return `Pizza "${pizza}" não encontrada no menu.`;
    }
  
    function calculateTotalPrice(currentPrice, remainingExtras) {
      if (remainingExtras.length === 0) {
        return currentPrice;
      } else {
        const extra = remainingExtras[0];
        const extraPrice = extraOptionPrices[extra];
  
        if (extraPrice === undefined) {
          return `Opção extra "${extra}" inválida.`;
        }
  
        return calculateTotalPrice(currentPrice + extraPrice, remainingExtras.slice(1));
      }
    }
  
    const totalPrice = calculateTotalPrice(basePrice, extras);
  
    if (typeof totalPrice === 'string') {
      return totalPrice; // Retorna a mensagem de erro se houver
    }
  
    return totalPrice;
  }
  
  /**
  Your function is called with a list of PizzaOrders and should return the total price of the order in dollars. Each PizzaOrder has a pizza property - the pizza's name, and an extras property - the list of extra options.
  
  const margherita = new PizzaOrder('Margherita');
  const caprese = new PizzaOrder('Caprese', 'ExtraToppings');
  orderPrice([margherita, caprese]);
  // => 18
  You'll realize that you can't write this using recursion, as one test with a tremendous amount of orders will raise a Maximum call stack size exceeded. No worries, this is intentional - try implementing this function using an imperative loop! You have many options, such as, but not limited to using reduce or a for loop.
   */
  export function orderPrice(pizzaOrders) {
    const basePrices = {
      'Margherita': 7,
      'Caprese': 9,
      'Formaggio': 10,
    };
  
    const extraOptionPrices = {
      'ExtraSauce': 1,
      'ExtraToppings': 2,
    };
  
    let totalPrice = 0;
  
    for (const order of pizzaOrders) {
      const pizzaName = order.pizza;
      const extras = order.extras || [];
      let currentOrderPrice = 0;
  
      const basePrice = basePrices[pizzaName];
      if (basePrice === undefined) {
        console.error(`Pizza "${pizzaName}" não encontrada no menu.`);
        continue; // Ignora este pedido e continua para o próximo
      }
      currentOrderPrice += basePrice;
  
      for (const extra of extras) {
        const extraPrice = extraOptionPrices[extra];
        if (extraPrice === undefined) {
          console.error(`Opção extra "${extra}" inválida para a pizza "${pizzaName}".`);
        } else {
          currentOrderPrice += extraPrice;
        }
      }
      totalPrice += currentOrderPrice;
    }
  
    return totalPrice;
  }
  