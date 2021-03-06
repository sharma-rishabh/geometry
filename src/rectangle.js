const { Style } = require('./styles.js');

const wrapWithTag = (tagName, content, attribute = '') => {
  return `<${tagName} ${attribute}>${content}</${tagName}>`;
};

class Rectangle {
  constructor(origin, length, breadth) {
    this.origin = origin
    this.length = length
    this.breadth = breadth
  }

  equals(anotherRectangle) {
    return anotherRectangle instanceof Rectangle &&
      this.origin.equals(anotherRectangle.origin) &&
      this.breadth === anotherRectangle.breadth &&
      this.length === anotherRectangle.length
  }

  area() {
    return this.length * this.breadth;
  }

  toHtml() {
    const style = new Style;

    style.addAttribute('width', this.length);
    style.addAttribute('height', this.breadth);
    style.addAttribute('border', '1px solid black');
    style.addAttribute('position', 'absolute');
    style.addAttribute('top', `${this.origin.y}px`);
    style.addAttribute('left', `${this.origin.x}px`);

    return wrapWithTag('div', '', style.toString())
  };
}

exports.Rectangle = Rectangle;
