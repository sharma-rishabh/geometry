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
});