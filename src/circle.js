const { Style } = require('./styles.js');

const wrapWithTag = (tagName, content, attribute = '') => {
  return `<${tagName} ${attribute}>${content}</${tagName}>`;
};

class Circle {
  constructor(origin, radius) {
    this.origin = origin;
    this.radius = radius;
  }

  equals(anotherCircle) {
    return anotherCircle instanceof Circle &&
      anotherCircle.origin.equals(this.origin) &&
      anotherCircle.radius === this.radius
  }

  toHtml() {
    const style = new Style();
    const diameter = this.radius * 2;

    style.addAttribute('width', `${diameter}px`);
    style.addAttribute('height', `${diameter}px`);
    style.addAttribute('border-radius', `50%`);
    style.addAttribute('border', '1px solid black');
    style.addAttribute('position', 'absolute');
    style.addAttribute('top', ` ${this.origin.y - this.radius}px`);
    style.addAttribute('left', ` ${this.origin.x - this.radius}px`);

    return wrapWithTag('div', '', style.toString());
  }
};

exports.Circle = Circle;
