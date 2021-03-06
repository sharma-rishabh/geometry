const { Style } = require('./styles.js');

const square = x => x * x;

const rotateInRadians = (rad) => `rotate(${rad}rad)`;

const wrapWithTag = (tagName, content, attribute = '') => {
  return `<${tagName} ${attribute}>${content}</${tagName}>`;
};

class Line {
  constructor(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  equals(anotherLine) {
    return anotherLine instanceof Line &&
      anotherLine.startPoint.equals(this.startPoint) &&
      anotherLine.endPoint.equals(this.endPoint);
  }

  #deltaY() {
    return this.endPoint.y - this.startPoint.y;
  }

  #deltaX() {
    return this.endPoint.x - this.startPoint.x;
  }

  length() {
    return this.startPoint.distanceFrom(this.endPoint);
  }

  slopeInRad() {
    const radians = Math.atan(this.slope());
    return parseFloat(radians.toFixed(2));
  }

  slope() {
    return (this.#deltaY()) / (this.#deltaX());
  }

  toHtml() {
    const width = this.length().toFixed(2);

    const style = new Style();
    style.addAttribute('width', `${width}px`);
    style.addAttribute('height', '0px');
    style.addAttribute('transform-origin', 'left')
    style.addAttribute('transform', rotateInRadians(this.slopeInRad()));
    style.addAttribute('border', '0.5px solid black');
    style.addAttribute('position', 'absolute');
    style.addAttribute('top', `${this.startPoint.y}`)
    style.addAttribute('left', `${this.startPoint.x}`)

    return wrapWithTag('div', '', style.toString());
  }
}

exports.Line = Line;
