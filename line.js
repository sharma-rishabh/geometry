const { Style } = require('styles.js');

const square = x => x * x;

class Line {
  constructor(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  deltaY() {
    return this.endPoint.y - this.startPoint.y;
  }

  deltaX() {
    return this.endPoint.x - this.startPoint.x;
  }

  length() {
    const base = square(this.deltaX());
    const height = square(this.deltaY());
    return Math.sqrt(base + height);
  }

  slopeInRad() {
    return Math.atan(this.slope());
  }

  slope() {
    return (this.deltaY()) / (this.deltaX());
  };
}