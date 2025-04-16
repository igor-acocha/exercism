/**
Define a class (constructor function) named Size. It should have two fields width and height that store the window's current dimensions. The constructor function should accept initial values for these fields. The width is provided as the first parameter, the height as the second one. The default width and height should be 80 and 60, respectively.

Additionally, define a method resize(newWidth, newHeight) that takes a new width and height as parameters and changes the fields to reflect the new size.

const size = new Size(1080, 764);
size.width;
// => 1080
size.height;
// => 764

size.resize(1920, 1080);
size.width;
// => 1920
size.height;
// => 1080
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
  const point = new Position();
  point.x;
  // => 0
  point.y;
  // => 0
  
  point.move(100, 200);
  point.x;
  // => 100
  point.y;
  // => 200
  */

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

/**
 Define a ProgramWindow class with the following fields:

screenSize: holds a fixed value of type Size with width 800 and height 600
size : holds a value of type Size, the initial value is the default value of the Size instance
position : holds a value of type Position, the initial value is the default value of the Position instance
When the window is opened (created), it always has the default size and position in the beginning.

const programWindow = new ProgramWindow();
programWindow.screenSize.width;
// => 800

// Similar for the other fields.
*/

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

/**
The ProgramWindow class should include a method resize. It should accept a parameter of type Size as input and attempts to resize the window to the specified size.

However, the new size cannot exceed certain bounds.

The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1.
The maximum height and width depend on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested, then the window would be resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the request.
const programWindow = new ProgramWindow();

const newSize = new Size(600, 400);
programWindow.resize(newSize);
programWindow.size.width;
// => 600
programWindow.size.height;
// => 400
*/
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.max(1, Math.min(newSize.width, maxWidth));
    this.size.height = Math.max(1, Math.min(newSize.height, maxHeight));
  }

/**
Besides the resize functionality, the ProgramWindow class should also include a method move. It should accept a parameter of type Position as input. The move method is similar to resize however, this method adjusts the position of the window to the requested value, rather than the size.

As with resize the new position cannot exceed certain limits.

The smallest position is 0 for both x and y.
The maximum position in either direction depends on the current size of the window. The edges cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's size is at x = 250, y = 100 and a move to x = 600, y = 200 is requested, then the window would be moved to x = 550, y = 200 as the screen is not large enough in the x direction to fully accommodate the request.
const programWindow = new ProgramWindow();

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
programWindow.position.x;
// => 50
programWindow.position.y;
// => 100
*/
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }
}

/**
Implement a changeWindow function that accepts a ProgramWindow instance as input and changes the window to the specified size and position. The function should return the ProgramWindow instance that was passed in after the changes were applied.

The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.

const programWindow = new ProgramWindow();
changeWindow(programWindow);
programWindow.size.width;
// => 400

// Similar for the other fields.
*/

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}
