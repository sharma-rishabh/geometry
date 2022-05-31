const assert = require('assert');
const { Circle } = require('../src/circle.js');
const { Point } = require('../src/point.js');

describe('Circle', () => {
  it('should check if two circles are equal', () => {
    const origin = new Point(4, 5);

    const circle1 = new Circle(origin, 5);
    const circle2 = new Circle(origin, 5)
    const circle3 = new Circle(origin, 4)
    assert.ok(circle1.equals(circle2));
    assert.strictEqual(circle1.equals(circle3), false);
  });

  it('should write html code to generate given circle.', () => {
    const origin = new Point(4, 5);
    const circle1 = new Circle(origin, 5);

    const html = '<div style="width:10px;height:10px;border-radius:50%;border:1px solid black;position:absolute;top: 0px;left: -1px;"></div>';

    assert.strictEqual(circle1.toHtml(), html)
  });

  it('should write html code to generate given circle from origin.', () => {
    const origin = new Point(0, 0);
    const circle1 = new Circle(origin, 5);

    const html = '<div style="width:10px;height:10px;border-radius:50%;border:1px solid black;position:absolute;top: -5px;left: -5px;"></div>';

    assert.strictEqual(circle1.toHtml(), html)
  });
});