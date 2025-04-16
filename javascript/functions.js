        export function cookingStatus(remainingTime){
    if (remainingTime === 0){
      return 'Lasagna is done.'
    } else if (remainingTime > 0){
      return 'Not done, please wait.'
    } else{
      return 'You forgot to set the timer.'
    }
  }
  
  export function preparationTime(layers, average){
    const numberOfLayers = layers.length;
    const timePerLayer = average === undefined ? 2 : average;
    return numberOfLayers * timePerLayer;
  }
  
  export function quantities(layers){
    let noodlesNeeded = 0;
    let sauceNeeded = 0;
  
    for (const layer of layers) {
      if (layer === 'noodles') {
        noodlesNeeded += 50;
      } else if (layer === 'sauce') {
        sauceNeeded += 0.2;
      }
    }
  
    return {
      noodles: noodlesNeeded,
      sauce: sauceNeeded,
    };
  }
  
  export function addSecretIngredient(friendsList, myList) {
    const secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
  }
  
  export function scaleRecipe(recipe, portions) {
    const factor = portions / 2;
    const scaledRecipe = {};
  
    for (const ingredient in recipe) {
      if (recipe.hasOwnProperty(ingredient)) {
        scaledRecipe[ingredient] = recipe[ingredient] * factor;
      }
    }
  
    return scaledRecipe;
  }