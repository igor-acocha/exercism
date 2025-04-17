//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//Introduction
//Conway's Game of Life is a fascinating cellular automaton created by the British mathematician John Horton Conway in 1970.

//The game consists of a two-dimensional grid of cells that can either be "alive" or "dead."

//After each generation, the cells interact with their eight neighbors via a set of rules, which define the new generation.

//Instructions
//After each generation, the cells interact with their eight neighbors, which are cells adjacent horizontally, vertically, or diagonally.

//The following rules are applied to each cell:

//*Any live cell with two or three live neighbors lives on.
//*Any dead cell with exactly three live neighbors becomes a live cell.
//*All other cells die or stay dead.
//Given a matrix of 1s and 0s (corresponding to live and dead cells), apply the rules to each cell, and return the next generation.
//

export class GameOfLife {
    constructor(initialState) {
      this._state = initialState.map(row => [...row]); 
      this._rows = this._state.length;
      this._cols = this._state[0] ? this._state[0].length : 0;
    }
  
    tick() {
      const nextState = this.createEmptyGrid(this._rows, this._cols);
  
      for (let i = 0; i < this._rows; i++) {
        for (let j = 0; j < this._cols; j++) {
          const liveNeighbors = this.countLiveNeighbors(i, j);
          const isAlive = this._state[i][j] === 1;
  
          if (isAlive) {
            if (liveNeighbors === 2 || liveNeighbors === 3) {
              nextState[i][j] = 1;
            } else {
              nextState[i][j] = 0;
            }
          } else {
            if (liveNeighbors === 3) {
              nextState[i][j] = 1;
            } else {
              nextState[i][j] = 0;
            }
          }
        }
      }
      this._state = nextState;
    }
  
    state() {
      return this._state.map(row => [...row]); 
    }
  
    countLiveNeighbors(row, col) {
      let count = 0;
      for (let i = Math.max(0, row - 1); i <= Math.min(this._rows - 1, row + 1); i++) {
        for (let j = Math.max(0, col - 1); j <= Math.min(this._cols - 1, col + 1); j++) {
          if ((i !== row || j !== col) && this._state[i][j] === 1) {
            count++;
          }
        }
      }
      return count;
    }
  
    createEmptyGrid(rows, cols) {
      return Array(rows).fill(null).map(() => Array(cols).fill(0));
    }
  }
  