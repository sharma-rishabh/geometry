const { Style } = require('./styles.js');

class Circle {
  constructor(origin, radius) {
    this.origin = origin;
    this.radius = radius;
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

    return `<div ${style.toString()} ></div>`;
  }
};

exports.Circle = Circle;
