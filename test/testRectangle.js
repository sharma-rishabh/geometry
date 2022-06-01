const assert = require('assert');
const { Rectangle } = require('../src/rectangle.js');
const { Point } = require('../src/point.js');

describe('Rectangle', () => {
  it('should check if two instances of a rectangle are equal.', () => {
    const origin = new Point(1, 1);
    const rect = new Rectangle(origin, 4, 3);
    const rect2 = new Rectangle(origin, 2, 3)
    assert.strictEqual(rect.equals(rect), true);
    assert.strictEqual(rect.equals(rect2), false);
  });
  it('Should give area of a rectangle.', () => {
    const origin = new Point(1, 1);
    const rect = new Rectangle(origin, 4, 3);
    const rect2 = new Rectangle(origin, 0, 0);
    assert.strictEqual(rect.area(), 12);
    assert.strictEqual(rect2.area(), 0);
  });
  it('Should give html representation of the rectangle.', () => {
    const origin = new Point(1, 2);
    const rect = new Rectangle(origin, 4, 3);

    const rectToHtml = '<div style="width:4;height:3;border:1px solid black;position:absolute;top:2px;left:1px;"></div>'

    const rect2 = new Rectangle(origin, 0, 0);

    const rect2ToHtml = '<div style="width:0;height:0;border:1px solid black;position:absolute;top:2px;left:1px;"></div>'

    assert.strictEqual(rect.toHtml(), rectToHtml);
    assert.strictEqual(rect2.toHtml(), rect2ToHtml);
  });
});