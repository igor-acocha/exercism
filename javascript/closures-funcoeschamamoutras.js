
/**
Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

In Geometry, translation refers to moving points, vectors or shapes the same distance in one direction. It can be interpreted as addition of a constant to every point.

const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
// result => [6, 8]
 */
export function translate2d(dx, dy) {
    return (x, y) => {
      return [x + dx, y + dy];
    };
  }
  
  /**
  Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.
  
  In geometry, uniform scaling refers to enlarging or shrinking vectors or shapes in the same direction. It can be interpreted as multiplying every point by a constant (scaling factor).
  
  For this exercise, assume only positive scaling values.
  
  const doubleScale = scale2d(2, 2);
  const result = doubleScale(6, -3);
  // result => [12, -6]
   */
  export function scale2d(sx, sy) {
    return (x, y) => {
      return [x * sx, y * sy];
    };
  }
  
  /**
  Combine two transformation functions to perform a repeatable transformation. This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.
  
  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleCoordinates = scale2d(2, 2);
  const composedTransformations = composeTransform(
    moveCoordinatesRight2Px,
    doubleCoordinates,
  );
  const result = composedTransformations(0, 1);
  // result => [4, 2]
   */
  export function composeTransform(f, g) {
    return (x, y) => {
      const intermediateResult = f(x, y);
      return g(...intermediateResult);
    };
  }
  
  /**
  Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.
  
  Memoizing is sometimes used in dynamic programming. It allows for expensive operations to be done only once since their results are remembered. Note that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all results.
  
  const tripleScale = scale2d(3, 3);
  const memoizedScale = memoizeTransform(tripleScale);
  
  memoizedScale(4, 3); // => [12, 9], this is computed since it hasn't been computed before for the arguments
  memoizedScale(4, 3); // => [12, 9], this is remembered, since it was computed already
   */
  export function memoizeTransform(f) {
    let lastX;
    let lastY;
    let lastResult;
  
    return (x, y) => {
      if (x === lastX && y === lastY) {
        return lastResult;
      } else {
        lastX = x;
        lastY = y;
        lastResult = f(x, y);
        return lastResult;
      }
    };
  }
  