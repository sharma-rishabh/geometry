class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point &&
      this.x === anotherPoint.x &&
      this.y === anotherPoint.y;
  }

  distanceFrom(anotherPoint) {
    const deltaX = this.x - anotherPoint.x;
    const deltaY = this.y - anotherPoint.y;

    const distance = Math.hypot(deltaX, deltaY);
    return +distance.toFixed(2);
  }
}

exports.Point = Point;