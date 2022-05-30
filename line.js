const fs = require('fs');
const { Style } = require('./styles.js');

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
  }

  toHtml() {
    const width = this.length().toFixed(2);

    const style = new Style();
    style.addAttribute('width', `${width}px`);
    style.addAttribute('height', '0px');
    style.addAttribute('transform-origin', 'left')
    style.addAttribute('transform', `rotate(${this.slopeInRad().toFixed(2)}rad)`);
    style.addAttribute('border', '1px solid black');
    style.addAttribute('position', 'absolute');
    style.addAttribute('top', `${this.startPoint.y}`)
    style.addAttribute('left', `${this.startPoint.x}`)

    return `<div ${style.toString()}/>`;
  }
}

const line = new Line({ x: 100, y: 100 }, { x: 100, y: 1200 });
fs.writeFileSync('./line.html', line.toHtml(), 'utf8')